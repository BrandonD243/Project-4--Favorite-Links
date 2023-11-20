import { useState } from "react";
import Table from './Table';
import Form from './Form';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = (index) => {
        setFavLinks(favLinks.filter((_, i) => i !== index));
    }

    const handleSubmit = (favLink) => {
        setFavLinks([...favLinks, favLink]);
    }

    return (
        <div>
            <h1>Link Adder</h1>
            <p>Add the link and URL to the table!</p>
            <Table linkData={favLinks} removeLink={handleRemove} />
            <h1>Add A New Link!</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

export default LinkContainer;