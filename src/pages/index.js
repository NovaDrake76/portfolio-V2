import Head from "next/head"
import SideItem from "@/components/sideItem"
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"

export default function Home() {
  const leftItems = [
    {
      title: "Github",
      link: "https://github.com/NovaDrake76",
      icon: <FaGithub />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/nathan-marques/",
      icon: <FaLinkedin />,
    },
    {
      title: "Discord",
      link: "https://discord.com/channels/@me/830191630069137459",
      icon: <FaDiscord />,
    },
  ]

  const rightItems = [
    {
      title: "Email",
      link: "novadrake76@gmail.com",
      icon: undefined,
    },
  ]

  return (
    <>
      <Head>
        <title>Nova Drake - Front end</title>
        <meta name="description" content="Here are some of my works" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-3xl bg-[#0A192F] flex justify-between ">
          <SideItem data={leftItems} />
          <div className="flex flex-col w-full">b</div>
          <SideItem data={rightItems} />
        </div>
      </main>
    </>
  )
}
