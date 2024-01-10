import { motion } from "framer-motion";
import { appRoutes } from "../../routes/app.routes";
import { NavLinkComponent } from "../navLink";

const Sidebar = () => {
  return (
    <motion.aside className="aside">
      <NavLinkComponent routesArray={appRoutes} />
    </motion.aside>
  );
};

export default Sidebar;
