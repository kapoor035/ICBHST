import React from 'react'
import { committee } from '@/components/constants'
import CommitteeTable from './CommitteeTable'
import CommitteeCard from './CommitteeCard'

const Committee = () => {
    return (
        <>
            <div className='px-4 py-12 sm:px-8 md:px-16 md:pb-16 flex flex-col gap-4 justify-center items-center' id='Committee'>
                <div className='flex flex-col justify-center items-center mb-4'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-black uppercase'>Organizing Committee</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-1 flex-wrap text-center'>
                    {committee.main.map((item) => (
                        <CommitteeCard key={item.id} name={item.name} des={item.des} role={item.role} picture={item.picture} />
                    ))}
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-start gap-8'>

                    {/* Technical Program Committee */}
                    <CommitteeTable data={committee.technical} committeeName="Technical Program" />

                    {/* Stage Management Committee */}
                    <CommitteeTable data={committee.stage} committeeName="Stage Management" />

                    {/* Local Organizing/Hospitality Committee */}
                    <CommitteeTable data={committee.local} committeeName="Local Organizing/Hospitality" className="row-span-3" />

                    {/* Finance Committee */}
                    <CommitteeTable data={committee.finance} committeeName="Finance" />

                    {/* Web Page Committee */}
                    <CommitteeTable data={committee.web} committeeName="Web Page" />

                    {/* Social Media/Photography Committee */}
                    <CommitteeTable data={committee.social} committeeName="Social Media/Photography" />

                    {/* Travel & Accomodation Committee */}
                    <CommitteeTable data={committee.travel} committeeName="Travel & Accomodation" />

                    {/* Print Media and Photography Committee */}
                    <CommitteeTable data={committee.print} committeeName="Print Media and Photography" />

                    {/* Food Committee */}
                    <CommitteeTable data={committee.food} committeeName="Food" />

                    {/* Registration Committee */}
                    <CommitteeTable data={committee.registration} committeeName="Registration" />

                    {/* Printing Committee */}
                    <CommitteeTable data={committee.printing} committeeName="Printing" />

                    {/* Liaison officer Committee */}
                    <CommitteeTable data={committee.liaison} committeeName="Liaison officer" />

                    {/* Souvenir Committee */}
                    <CommitteeTable data={committee.Souvenir} committeeName="Souvenir" />

                    {/* Cultural Committee */}
                    <CommitteeTable data={committee.cultural} committeeName="Cultural" />

                </div>
            </div>
        </>
    )
}

export default Committee