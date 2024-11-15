'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MonitorIcon as Bike, Dumbbell, Footprints } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Portfolio() {  
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
       <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-4 relative">
              <Image
                src="/logo.svg"
                alt="JD Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="mr-4 relative">
              <Image
                src="/images/mifotoperfil.jpg?height=200&width=200"
                alt="Jesús Digón"
                width={100}
                height={100}
                className="rounded-full border-2 border-primary"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Jesús Digón</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Link href={"https://github.com/JesusDigon"} target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href={"https://www.linkedin.com/in/jesús-digón-abia-a407671b0"} target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" onClick={() => router.push('mailto:jesus.digon.abia@gmail.com')}>
              {/* <Link href={'mailto:jesus.digon.abia@gmail.com'} target="_blank"> */}
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              {/* </Link> */}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Sobre mí</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Soy un desarrollador full stack con experiencia en una variedad de tecnologías web y móviles. 
                Actualmente, trabajo en BeSoccer desde 2020, donde he tenido la oportunidad de trabajar en 
                diversos proyectos y asumir roles de liderazgo.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Antes de mi carrera en desarrollo, trabajé como vendedor en El Corte Inglés durante 10 años, 
                donde adquirí valiosa experiencia en atención al cliente y habilidades de comunicación. 
                Fuera del trabajo, soy un apasionado de los deportes, practicando regularmente running, 
                ciclismo y crossfit.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Experiencia Laboral</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>BeSoccer</CardTitle>
                <CardDescription>2020 - Presente</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Desarrollo de besoccer.com utilizando PHP, HTML, CSS y JavaScript</li>
                  <li>Trabajo en la API que alimenta la web y la app de BeSoccer</li>
                  <li>Desarrollo y mantenimiento del ERP de la empresa</li>
                  <li>Liderazgo de equipo de desarrollo, gestionando el ERP, la web besoccer.com, la API y el servicio de notificaciones</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>El Corte Inglés</CardTitle>
                <CardDescription>2008 - 2018</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Vendedor con 10 años de experiencia en atención al cliente</li>
                  <li>Formador de otros vendedores en material de running</li>
                  <li>Desarrollo de habilidades de comunicación y ventas</li>
                  <li>Especialización en equipamiento deportivo, particularmente en running</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Proyectos Destacados</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>BeSoccer Web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollo y mantenimiento de la web besoccer.com, utilizando PHP, HTML, CSS y JavaScript.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>BeSoccer API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollo de la API que alimenta tanto la web como la aplicación móvil de BeSoccer.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ERP BeSoccer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollo y mantenimiento del ERP de la empresa, utilizando PHP, MySQL, JavaScript, jQuery, HTML y CSS.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Servicio de Notificaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Matenimiento del servicio de notificaciones utilizando Firebase y Node.js.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>App Móvil Personal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollo de una aplicación móvil utilizando el framework Expo de React Native.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Habilidades Técnicas</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>PHP</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
            <Badge>jQuery</Badge>
            <Badge>MySQL</Badge>
            <Badge>Node.js</Badge>
            <Badge>Firebase</Badge>
            <Badge>React Native</Badge>
            <Badge>Expo</Badge>
            <Badge>API Development</Badge>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Intereses Personales</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Footprints className="h-6 w-6 mr-2 text-primary" />
                  <span className="text-gray-600 dark:text-gray-400">Running</span>
                </div>
                <div className="flex items-center">
                  <Bike className="h-6 w-6 mr-2 text-primary" />
                  <span className="text-gray-600 dark:text-gray-400">Ciclismo</span>
                </div>
                <div className="flex items-center">
                  <Dumbbell className="h-6 w-6 mr-2 text-primary" />
                  <span className="text-gray-600 dark:text-gray-400">Crossfit</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}