import React from "react";
import Input from '../reusable/input';
import Button from "../reusable/button";

const ItemForm = () => {
    return (
        <form>
            <div>
                <h3>Create Item</h3>
                <Input name="name"></Input>
                <Input name="description"></Input>
                <Button name="Create"></Button>
            </div>
        </form>
    );
}
export default ItemForm;