import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Supporters() {
    return (
        <>
            <PageSeo
                title={`About - ${siteMetadata.author}`}
                description={`About me - ${siteMetadata.author}`}
                url={`${siteMetadata.siteUrl}/about`}
            />
            <div className="divide-y">
                <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Supporters
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        Below is all the supporters from Patreon or GitHub Sponsors. I can't thank you enough. You give me the motivation to keep going and show me that the things I am doing actually help.
                    </p>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        From the bottom of my heart, Thank You.  ❤️
                    </p>
                </div>
                <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
                        <h1>
                            Steve Balow
                        </h1>
                        {/* <h1>
                            Tanner Meade
                        </h1>
                        <h2>
                            Tanner Meade
                        </h2> */}
                        <h3>
                            Van Yang, ElmoCrispers, Andy Drexler, Gary Griffin, Varun Bhalero, Andrii Reverchuk
                        </h3>
                        <h5>
                            Robert Brunhage
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}
