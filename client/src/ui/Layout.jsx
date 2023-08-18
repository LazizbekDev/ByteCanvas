import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
    // const navigation = useNavigation();
    // const isLoading = navigation.state === 'loading'
    return (
        <div className={'grid h-screen grid-rows-[auto_1fr_auto]'}>
            {/* {isLoading && <Loader />} */}
            <Navbar />

            <div className={'overflow-y-scroll'}>
                <main className={'mx-auto max-w-3xl'}>
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default Layout