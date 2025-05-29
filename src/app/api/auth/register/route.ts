import { createProfile } from "@/lib/profile";

export async function POST(request: Request) {
    //setup cookie if this shit is working
    const formData = await request.json();
    const rawName = formData['name'];
    const rawSurname = formData['surname'];
    if (typeof rawName !== 'string' || typeof rawSurname !== 'string') {
        return new Response('Invalid form data', { status: 400 });
    }
    const name = rawName.trim();
    const surname = rawSurname.trim();
    const profile = await createProfile(name, surname);

    if (profile != null) {
        return new Response(`${JSON.stringify(profile)}`, {
            status: 201,
            headers: { 'Set-Cookie': `token=${name}; Path=/` }
        })
    } else {
        return new Response('failure', {
            status: 400,
        })
    }
}