import { validateProfile } from "@/lib/auth/auth";


export async function POST(request: Request) {
    const formData = await request.json();
    const rawName = formData['name'];
    if (typeof rawName !== 'string') {
        return new Response('Invalid form data', { status: 400 });
    }
    const name = rawName.trim();
    const profile = await validateProfile(name);
    console.log(profile);
    if (profile) {
        return new Response('success', {
            status: 200,
            headers: { 'Set-Cookie': `token=${profile.id}` }
        })
    } else {
        return new Response('failure', {
            status: 401,
        })
    }
}