import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuWallet } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { IoReceiptOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import Li from "./ListItem";
import Button from "@/components/Button";
import Profile from "./Profile";

const Aside = () => {
  return (
    <section className="fixed left-0 top-0 bottom-0 w-96 bg-black/90 text-white -z-10 py-10 px-11 rounded-l-2xl flex flex-col justify-between items-center">
      <section className="flex flex-col justify-between items-center gap-10 w-full">
        <h1 className="text-4xl">
          <b>FINE</b>bank.<b>IO</b>
        </h1>

        <ul className="w-full flex flex-col justify-between items-center gap-3">
          <Li icon={<HiOutlineSquares2X2 />} title="Overview" />

          <Li icon={<LuWallet />} title="Balances" />

          <Li icon={<GrTransaction />} title="Trancastion" />

          <Li icon={<LiaMoneyBillSolid />} title="Bills" />

          <Li icon={<IoReceiptOutline />} title="Expenses" />

          <Li icon={<GoGoal />} title="Goals" />

          <Li icon={<IoSettingsOutline />} title="Settings" />
        </ul>
      </section>

      <section className="flex flex-col justify-between items-center gap-15 w-full mb-10">
        <Button className="bg-white/10 flex gap-4 justify-start items-center">
          <MdOutlineLogin size={20} /> Logout
        </Button>

        <hr className="text-white/20 w-full" />

        <Profile />
      </section>
    </section>
  );
};

export default Aside;
