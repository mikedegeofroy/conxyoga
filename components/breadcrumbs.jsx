import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Breadcrumbs({ title }) {

    const router = useRouter();

    const asPathWithoutQuery = router.asPath.split("?")[0];

    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    console.log(asPathNestedRoutes)

    if(asPathNestedRoutes.length > 0) {
        return  (
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <Link href={"/"} class="inline-flex items-center text-sm font-medium">
                        INICIO
                    </Link>
                </li>
                {asPathNestedRoutes.map((x, i, arr) => {
                    console.log(x);

                    return (
                        <li>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-3">
                                    <path strokeLinecap="butt" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>

                                <div className={arr.length - 1 === i ? "underline" : ""}>
                                    <Link href={x}>
                                        {title ? title.toUpperCase() : x.toUpperCase()}
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )} else{return  (<></>)}
}