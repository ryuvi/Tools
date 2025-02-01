import Link from 'next/link'

export default function Card({ endpoint, cardColor }) {
    const removeSlash = (text) => text.replace("/", "");
    const firstLetter = word => {
        word[0] = word[0].toUpperCase();
        return word.join("");
    }
    const capitalize = words => words.map(word => firstLetter(word.split(""))).join(" ")
    const formatText = ep => {
        let result = ""
        result = removeSlash(ep)
        result = capitalize(result.split("-"))
        return result
    }


    return <Link href={endpoint} style={{width: '100%', height: '100%'}} className='flex items-center justify-center'>
            <h4 >{formatText(endpoint)}</h4>
    </Link>
}
