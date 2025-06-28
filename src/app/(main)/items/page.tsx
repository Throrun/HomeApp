'use client';

import Navbar from "@/app/ui/reusable/navbar";
import Card, {CardContent} from "@/app/ui/reusable/card";
import styles from "./page.module.css";
import ItemForm from "@/app/ui/unique/ItemForm";


export default function Items() {
  return (
    <main>
      <Navbar />
      <div className={styles.listcontainer}>
        <div className={styles.contentWrapper}>
          <ItemForm></ItemForm>
          <Card name="Items" columnSpan={1} rowSpan={1} content={CardContent.list}/>
        </div>
      </div>
    </main>
  );
}
