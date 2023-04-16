import Link from 'next/link'

export default function index() {
    return (
        <>
            <div className="flex flex-row m-2 gap-3 ">
                <Link href="/" className={'no-underline '}> Product List </Link>
                <Link href="/form" className={'no-underline '}> Product Form</Link>
            </div>
        </>

    )
}
