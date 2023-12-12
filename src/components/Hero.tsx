import Image from "next/image"

const Hero = () => {
    return (
        <div className="container relative pt-16">
            <Image className="w-[100%] h-auto" src={"/hero.png"} width={1500} height={900} alt="Hero Image" />

        </div>
    )
}

export default Hero
