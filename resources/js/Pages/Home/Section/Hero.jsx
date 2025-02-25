import CompanyLogo from '@/Components/CompanyLogo';
import { Wave } from '@/Components/svg';
import { ArrowRightIcon } from '@iconicicons/react';
import { Link } from '@inertiajs/react';

const Hero = () => {
    return (
        <div className="relative hero bg-base-100 pt-28 pb-20 xl:pb-52 bottom-5">
            <div className="hero-content flex-col text-center z-30">
                <CompanyLogo className="2xl:w-60 xl:w-56 w-52 object-contain" />
                {/* <img
                    className="mask mask-circle 2xl:w-72 xl:w-56 w-52 object-contain "
                    src={companyLogo}
                    alt="CompanyLogo"
                /> */}
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text ">
                        PT. Lutvina Djaja Nusantara
                    </h1>
                    <div className="divider -m-1 opacity-25 before:bg-base-content after:bg-base-content" />
                    <h4 className="md:text-2xl text-sm font-light bg-gradient-to-l from-secondary to-accent text-transparent bg-clip-text tracking-wider">
                        GENERAL CONTRACTOR, IT, and TRADING
                    </h4>
                    {/* <p className="py-6 text-base-content">
                        Perusahaan yang berdiri sebagai bentuk respon dari
                        kebutuhan setiap klien dalam bidang Perencanaan,
                        Konstruksi, Teknologi Informasi, Supplier, dan Trading
                        yang semakin terbuka dan berkembang di Indonesia.
                        Didukung oleh sumber daya manusia Bangsa Indonesia yang
                        profesional dalam memberikan pelayanan terbaik untuk
                        menjamin kepuasan <i>client</i> kami.
                    </p> */}
                    <Link
                        as="button"
                        href={route('company.profile')}
                        className="btn btn-primary px-16 mt-10 gap-2"
                    >
                        Kenalan
                        <ArrowRightIcon className="animate-pulse" />
                    </Link>
                </div>
            </div >
            <Wave className="absolute -bottom-5 md:-bottom-19 xl:-bottom-50 z-10 fill-base-200 rotate-180" />
        </div>
    );
};

export default Hero;
