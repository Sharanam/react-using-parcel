
import Menu from "./button/Menu"

const Header = () => {
    return (
        <header className=" bg-gray-800 text-white p-4">
            <div className="flex justify-between max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold">
                    GDCST Monthly Reporting Studio
                </h1>

                <Menu />
            </div>
        </header>
    )
}

export default Header