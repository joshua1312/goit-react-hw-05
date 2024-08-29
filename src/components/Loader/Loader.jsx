
import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className={css.loader}>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="rgb(255, 0, 166)"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                margin="auto"
            />
        </div>
    );
};
export default Loader;
