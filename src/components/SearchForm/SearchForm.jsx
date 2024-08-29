
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

function SearchForm({ onSearch }) {
    const initialValues = {
        topic: "",
    };

    const handleSubmit = (values, actions) => {
        if (values.topic.trim() === "") {
            toast.error("Please enter search term!");
            return;
        }
        onSearch(values.topic);
        actions.resetForm();
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <Form className={css.searchForm} onSubmit={handleSubmit}>
                        <Field type="text" name="topic" placeholder="Search movies..." />
                        <button type="submit">Search</button>
                    </Form>
                )}
            </Formik>
            <Toaster />
        </div>
    );
}

export default SearchForm;
