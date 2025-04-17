import {useGetUserQuery} from "../../api/rootApi.ts";

const Home = () => {
    const {data: user} = useGetUserQuery()
    
    return (
        <div>
            <h1>Home {user?.name}</h1>
        </div>
    );
};

export default Home;