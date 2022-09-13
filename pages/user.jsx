import Layout from "../components/layout"
import { RadioGroup } from '@headlessui/react'
import { useState } from "react"

export default function userHomepage() {

    const [selected, setSelected] = useState(0)

    console.log(selected)

    return (
        <Layout>
            <div className="w-full flex">
                <div className="w-1/3 max-w-[400px] p-5">
                    <CreateTree values={courses} value={selected} onChange={setSelected}></CreateTree>

                </div>
                <div className="p-5">
                    {/* {plans[selected].content} */}
                </div>
            </div>
        </Layout>
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="rgb(43 255 0)" opacity="0.8" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const plans = [
    {
        name: 'Principiante',
        price: '120 €',
        description: 'yes',
        content: (
            <h1 className="text-[2.6rem]">Clase para Principiantes</h1>
        )
    },
    {
        name: 'Avanzado',
        price: '160 €',
        description: 'no',
        content: (
            <h1 className="text-[2.6rem]">Clase Avanzada</h1>
        )
    }
]

function Selector({values, ...props }) {
    return (
        <RadioGroup {...props}>
            <div className="space-y-2">
                {values.map((plan) => (
                    <RadioGroup.Option
                        key={plan.name}
                        value={plans.indexOf(plan)}
                        className={({ active, checked }) =>
                            `${active
                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                : ''
                            }
${checked ? 'bg-gray-100 bg-opacity-75 text-white' : 'bg-white'
                            }
relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                    >
                        {({ active, checked }) => (
                            <>
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${checked ? 'text-gray-900' : 'text-gray-900'
                                                    }`}
                                            >
                                                {plan.name}
                                            </RadioGroup.Label>
                                            <RadioGroup.Description
                                                as="span"
                                                className={`inline ${checked ? 'text-gray-900' : 'text-gray-500'
                                                    }`}
                                            >
                                                <span>
                                                    {plan.price}
                                                </span>{' '}
                                                <span aria-hidden="true">&middot;</span>{' '}
                                                <span>{plan.description}</span>
                                            </RadioGroup.Description>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="shrink-0 text-white">
                                            <CheckIcon className="h-6 w-6" locked="false" />
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

function CreateTree({values, ...props }) {

    // console.log(values)

    

    return (
        <>
            {/* {values.forEach((caregories) => {
                caregories.forEach((category) => {
                    if (typeof (category) == "string") {
                        return(<h1>{category.display_name}</h1>)
                    }
                    if (typeof (category) == "array") {
                        <Selector value={selected} onChange={setSelected} values={subcategory}></Selector>
                    }
                    if (typeof (category) == "object") {
                        category.forEach( (subcategory) => {
                            if (typeof (subcategory) == "string") {
                                return(<h1>{subcategory.display_name}</h1>)
                            }
                            if (typeof (subcategory) == "array") {
                                <Selector value={selected} onChange={setSelected} values={subcategory}></Selector>
                            }
                        })
                    }
                })

            })

            } */}
        </>
    )

}

const courses = {
    yoga: {
        display_name: "Yoga",
        cursos: [
            {
                name: 'Principiante',
                price: '120 €',
                description: 'yes',
                content: (
                    <h1 className="text-[2.6rem]">Clase para Principiantes</h1>
                )
            },
            {
                name: 'Avanzado',
                price: '160 €',
                description: 'no',
                content: (
                    <h1 className="text-[2.6rem]">Clase Avanzada</h1>
                )
            }
        ]
    },
    recetas: {
        display_name: "Recetas",
        depuracion: {
            display_name: "Recetas",
            cursos: [
                {
                    name: 'Principiante',
                    price: '120 €',
                    description: 'yes',
                    content: (
                        <h1 className="text-[2.6rem]">Clase para Principiantes</h1>
                    )
                },
                {
                    name: 'Avanzado',
                    price: '160 €',
                    description: 'no',
                    content: (
                        <h1 className="text-[2.6rem]">Clase Avanzada</h1>
                    )
                }
            ]
        },
        cosmeticas: {
            display_name: "Recetas",
            cursos: [
                {
                    name: 'Principiante',
                    price: '120 €',
                    description: 'yes',
                    content: (
                        <h1 className="text-[2.6rem]">Clase para Principiantes</h1>
                    )
                },
                {
                    name: 'Avanzado',
                    price: '160 €',
                    description: 'no',
                    content: (
                        <h1 className="text-[2.6rem]">Clase Avanzada</h1>
                    )
                }
            ]
        },
    }
}