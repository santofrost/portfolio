import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Typewriter } from './Typewriter'
import { useState, useEffect } from 'react'

export interface SectionProps {
    isTyping: boolean;
    onComplete: () => void;
}

export const ExperienceSection = ({ isTyping, onComplete }: SectionProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isTyping && step === 0) setStep(1);
    }, [isTyping, step]);

    return (
        <motion.section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-[#1e8712] pb-2 inline-flex pr-8">
                <Briefcase className="w-6 h-6" />
                <Typewriter text="EXPERIENCE.LOG" isTyping={step >= 1} onComplete={() => setStep(2)} />
            </h3>

            <div className="space-y-12 pt-4">
                {/* Experiencia 1 */}
                <div className="relative border-l-2 border-[#1e8712]">
                    <div className="absolute w-4 h-4 bg-[#39ff14] -left-[9px] top-1 rounded-sm shadow-[0_0_10px_#39ff14]" />
                    <div className="ml-8">
                        <h4 className="text-xl font-bold mb-1">
                            <Typewriter text="Software Engineer (Mid–Senior), CAPGEMINI" isTyping={step >= 2} onComplete={() => setStep(3)} />
                        </h4>
                        <p className="text-sm opacity-70 mb-3">
                            <Typewriter text="08/2021 - Actualidad | Node.js, React, Vue.js, .NET" isTyping={step >= 3} onComplete={() => setStep(4)} />
                        </p>
                        <p>
                            <Typewriter text="Referente técnico frontend y líder en proyectos internacionales. Arquitectura con Vue.js/React y robusto middleware .NET. Implementación de soluciones IA y orquestación de servicios en backend con mejora de rendimiento. Trato directo en inglés." isTyping={step >= 4} onComplete={() => setStep(5)} />
                        </p>
                    </div>
                </div>

                {/* Experiencia 2 */}
                <div className="relative border-l-2 border-[#1e8712]">
                    <div className="absolute w-4 h-4 bg-[#39ff14] -left-[9px] top-1 rounded-sm shadow-[0_0_10px_#39ff14]" />
                    <div className="ml-8">
                        <h4 className="text-xl font-bold mb-1">
                            <Typewriter text="Fullstack Developer, LYNXVIEW" isTyping={step >= 5} onComplete={() => setStep(6)} />
                        </h4>
                        <p className="text-sm opacity-70 mb-3">
                            <Typewriter text="03/2021 - 07/2021 | .NET Core, Vue.js, Node.js, GraphQL" isTyping={step >= 6} onComplete={() => setStep(7)} />
                        </p>
                        <p>
                            <Typewriter text="Desarrollo y análisis funcional en diversos proyectos legacy y nuevos, aportando estructura implementando soluciones con .NET MVC, Laravel, Node.js y GraphQL." isTyping={step >= 7} onComplete={() => setStep(8)} />
                        </p>
                    </div>
                </div>

                {/* Experiencia 3 */}
                <div className="relative border-l-2 border-[#1e8712]">
                    <div className="absolute w-4 h-4 bg-[#39ff14] -left-[9px] top-1 rounded-sm shadow-[0_0_10px_#39ff14]" />
                    <div className="ml-8">
                        <h4 className="text-xl font-bold mb-1">
                            <Typewriter text="Frontend Developer, NECOMPLUS" isTyping={step >= 8} onComplete={() => setStep(9)} />
                        </h4>
                        <p className="text-sm opacity-70 mb-3">
                            <Typewriter text="05/2019 - 03/2021 | Vue.js, .NET Core 2.2" isTyping={step >= 9} onComplete={() => setStep(10)} />
                        </p>
                        <p>
                            <Typewriter text="Migración de aplicación bancaria crítica de ASP Clásico a .NET Core. Implementación frontend con Vue.js, CI/CD para despliegues automáticos, y alta exigencia en seguridad interaccionando con equipos LATAM." isTyping={step >= 10} onComplete={() => setStep(11)} />
                        </p>
                    </div>
                </div>

                {/* Experiencia 4 */}
                <div className="relative border-l-2 border-[#1e8712]">
                    <div className="absolute w-4 h-4 bg-[#39ff14] -left-[9px] top-1 rounded-sm shadow-[0_0_10px_#39ff14]" />
                    <div className="ml-8">
                        <h4 className="text-xl font-bold mb-1">
                            <Typewriter text="Software Engineer & Team Lead Apprentice, LYNXVIEW" isTyping={step >= 11} onComplete={() => setStep(12)} />
                        </h4>
                        <p className="text-sm opacity-70 mb-3">
                            <Typewriter text="06/2018 - 05/2019 | .NET Core, Vue.js, Scrum" isTyping={step >= 12} onComplete={() => setStep(13)} />
                        </p>
                        <p>
                            <Typewriter text="Desarrollo de Web APIs, frontend con Vue.js y trato directo con clientes. Introducción y aplicación de metodologías ágiles (Scrum) para proyectos con requisitos cambiantes." isTyping={step >= 13} onComplete={() => setStep(14)} />
                        </p>
                    </div>
                </div>

                {/* Experiencia 5 */}
                <div className="relative border-l-2 border-[#1e8712]">
                    <div className="absolute w-4 h-4 bg-[#39ff14] -left-[9px] top-1 rounded-sm shadow-[0_0_10px_#39ff14]" />
                    <div className="ml-8">
                        <h4 className="text-xl font-bold mb-1">
                            <Typewriter text="Junior Developer, SWISS4WARD" isTyping={step >= 14} onComplete={() => setStep(15)} />
                        </h4>
                        <p className="text-sm opacity-70 mb-3">
                            <Typewriter text="02/2018 - 06/2018 | C#, Entity Framework, MVC 5" isTyping={step >= 15} onComplete={() => setStep(16)} />
                        </p>
                        <p>
                            <Typewriter text="Desarrollo en C# y asesoramiento al cliente, traduciendo necesidades de negocio a soluciones técnicas mediante Scrum y Kanban." isTyping={step >= 16} onComplete={() => setStep(17)} />
                        </p>
                    </div>
                </div>

                {/* Experiencia 6 */}
                <div className="relative border-l-2 border-[#1e8712]">
                    <div className="absolute w-4 h-4 bg-[#39ff14] -left-[9px] top-1 rounded-sm shadow-[0_0_10px_#39ff14]" />
                    <div className="ml-8">
                        <h4 className="text-xl font-bold mb-1">
                            <Typewriter text="Software Tester, GAMEHOUSE" isTyping={step >= 17} onComplete={() => setStep(18)} />
                        </h4>
                        <p className="text-sm opacity-70 mb-3">
                            <Typewriter text="08/2017 - 01/2018 | QA, Multi-platform" isTyping={step >= 18} onComplete={() => setStep(19)} />
                        </p>
                        <p>
                            <Typewriter text="Testing de funcionalidades, resolución de incidencias en Android, iOS, PC y Mac. Validación de sistemas antipiratería y localización." isTyping={step >= 19} onComplete={onComplete} />
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
