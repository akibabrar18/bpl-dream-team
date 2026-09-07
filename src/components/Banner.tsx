import BannerImg from '../assets/banner-main.png';
import BannerShadow from '../assets/bg-shadow.png';
const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-center container mx-auto rounded-2xl bg-black py-20 mt-4" style={{ backgroundImage: `url(${BannerShadow})` }}>
            <img src={BannerImg} alt="Banner" />
            <h1 className="text-3xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-lg text-gray-300">Beyond Boundaries Beyond Limits</p>
            <button className="btn bg-[#ccff00] border-[#ccff00] rounded-[10px]">Claim Free Credit</button>
        </div>
    );
};

export default Banner;