import icon from "../assets/vite.svg";
import userIcon from "../assets/user.svg";
import cartIcon from "../assets/cart.svg";
import logoutIcon from "../assets/logout.svg";
import { RightArrow } from "./icons/right-arrorw";

interface headerProps {
  is_authenticated: boolean;
  is_admin: boolean;
  handleRoute: (path: string) => {};
}

const navLinks = [
  { name: "Home", linkTo: "/home", needs_auth: false, needs_admin: false },
  {
    name: "Products",
    linkTo: "/products",
    needs_auth: true,
    needs_admin: false,
  },
  { name: "Orders", linkTo: "/orders", needs_auth: true, needs_admin: false },
  { name: "Admin", linkTo: "/admin", needs_auth: true, needs_admin: true },
  { name: "About", linkTo: "/about", needs_auth: false, needs_admin: false },
];

export const Header = (props: headerProps) => {
  const { is_admin, is_authenticated, handleRoute } = props;
  const activeNavLinks = navLinks.filter((nav) => {
    if (nav.needs_admin) {
      if (is_admin) {
        return true;
      }
      return false;
    }
    if (nav.needs_auth) {
      if (is_authenticated) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  });

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-5 w-auto" src={icon} alt="Logo" />
          </div>

          <nav className="hidden md:flex items-center space-x-15">
            {activeNavLinks.map((lnk) => {
              return (
                <a
                  key={lnk.name}
                  href={lnk.linkTo}
                  title={`Naviage to ${lnk.name}`}
                  onClick={() => {
                    handleRoute("/login");
                  }}
                >
                  {lnk.name}
                </a>
              );
            })}
          </nav>

          {is_authenticated && (
            <div className="hidden md:flex items-center space-x-5">
              <a
                href="/cart"
                className="items-center"
                title="Navigate to Cart"
                onClick={() => {
                  handleRoute("/cart");
                }}
              >
                <img className="h-8 w-auto" src={cartIcon} alt="Cart Image" />
              </a>
              <a
                href="/profile"
                className="items-center"
                title="Navigate to User Profile"
                onClick={() => {
                  handleRoute("/profile");
                }}
              >
                <img className="h-8 w-auto" src={userIcon} alt="User Image" />
              </a>
              <button
                title="Logout"
                onClick={() => {
                  handleRoute("/logout");
                }}
              >
                <img className="h-8 w-auto" src={logoutIcon} alt="Exit Image" />
              </button>
            </div>
          )}

          {!is_authenticated && (
            <div className="flex items-center">
              <button
                onClick={() => handleRoute("/login")}
                className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="flex items-center">
                  Login
                  <RightArrow className="w-4 h-4 ml-1.5" />
                </span>
              </button>
            </div>
          )}

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
