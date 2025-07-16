import Image from "next/image";
import Logo from "../../../assets/WebsiteLogo.png";

function page() {
  return (
    <section>
      <div className="fixed h-full w-full max-w-[200px] bg-[#f8f8f8] top-0 left-0 z-1000">
        <div className="flex items-center justify-center h-15 pt-4 max-w-40 m-auto">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Website Logo Img"
            className="w-40 h-10"
          />
        </div>
      </div>
    </section>
  );
}

export default page;
