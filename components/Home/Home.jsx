import Header from "./Header/page";
import Energy from './Energy/page';
import Process from './process/page';
import Expert from './expert/page'

export default function Home() {
    return (
        <>
            <Header />
            <Energy/>
            <Process/>
            <Expert/>
        </>
    );
}