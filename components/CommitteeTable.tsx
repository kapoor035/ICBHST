import React from 'react'

function chunkArray(array: string | any[], chunkSize: number) {
    let chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const CommitteeTable = ({ data, committeeName, className }: any) => {

    const chunkedData = chunkArray(data, 2);

    return (
        <div className={`${className}`}>
            <table className='border border-black' width={"100%"}>
                <thead className='bg-secondaryBg text-white border border-black'>
                    <tr>
                        <th colSpan={14} className='border border-black p-1 text-sm md:text-base'>{committeeName}</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {Array.isArray(chunkedData) && chunkedData.map((row, rowIndex) => (
                        <tr key={rowIndex} className=''>
                            {Array.isArray(row) && row.map((team: any) => (
                                <td key={team.id} className='border border-black px-1 md:px-4 py-1'>
                                    <p className='font-bold text-sm md:text-base'>{team.name}</p>
                                    <span className='text-[12px] md:text-sm font-normal'>{team.dept}</span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CommitteeTable