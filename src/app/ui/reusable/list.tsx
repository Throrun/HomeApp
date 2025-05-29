"use client";

import React, { useEffect, useState } from "react";
import styles from "./list.module.css";

type Item = {
  id: number;
  value: string;
};

const List = ({ name }: { name: string }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItemsFromDB = async () => {
      try {
        const response = await fetch(`/api/list/${name.toLowerCase()}`);
        const data: Item[] = await response.json();
        console.log("Fetched data for", name, data);
        setItems(data);
      } catch (error) {
        console.error("Błąd:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    getItemsFromDB();
  }, [name]);

  return (
    <div className={styles.list}>
      <div>
        {loading ? (
          <p>Ładowanie...</p>
        ) : items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.id}. {item.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>Brak danych.</p>
        )}
      </div>
    </div>
  );
};

export default List;
