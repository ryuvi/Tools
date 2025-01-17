import Link from 'next/link'
export default function Card({ endpoint, color }) {
    const removeSlash = (text) => text.replace("/", "");
    const removeDash = text => text.replace("-", " ");
    const firstLetter = word => {
        word[0] = word[0].toUpperCase();
        return word.join("");
    }
    const capitalize = text => text.split(" ").map(word => firstLetter(word.split(""))).join(" ")
    const formatText = ep => {
        let result = ""
        result = removeSlash(ep)
        result = removeDash(result)
        result = capitalize(result)
        return result
    }

    return <Link href={endpoint}><div style={{backgroundColor: color}} className='rounded-lg shadow-md shadow-stone-100 p-6 w-fit mx-auto hover:brightness-90 hover:cursor-pointer'>
        <h4 className='text-gray-800'>{formatText(endpoint)}</h4>
    </div></Link>
}
