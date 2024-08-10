import delphiSvg from "../../public/delphi.svg";
import javaSvg from "../../public/java.svg";
import nextSvg from "../../public/nextjs.svg";
import reactSvg from "../../public/react.svg";
import nodejs from "../../public/nodejs.svg";
import docker from "../../public/docker.svg";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export function SectionSkills() {
    return (
        <main className="flex flex-col h-screen p-3">
            <div className="flex justify-center w-full">
                <strong className="text-3xl text-center">Skills</strong>
            </div>
            <div className="grid grid-cols-3">
                <Card className="flex flex-col items-center justify-center bg-transparent text-gray-100">
                    <CardHeader className="flex items-center">
                        <Image
                            src={reactSvg}
                            alt="React"
                        />
                        <strong>ReactJS/Native</strong>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center bg-transparent text-gray-100">
                    <CardHeader className="flex items-center">
                        <Image
                            src={nextSvg}
                            alt="React"
                        />
                        <strong>ReactJS/Native</strong>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center bg-transparent text-gray-100">
                    <CardHeader className="flex items-center">
                        <Image
                            src={nodejs}
                            alt="React"
                        />
                        <strong>ReactJS/Native</strong>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center bg-transparent text-gray-100">
                    <CardHeader className="flex items-center">
                        <Image
                            src={javaSvg}
                            alt="React"
                        />
                        <strong>ReactJS/Native</strong>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center bg-transparent text-gray-100">
                    <CardHeader className="flex items-center">
                        <Image
                            src={delphiSvg}
                            alt="React"
                        />
                        <strong>ReactJS/Native</strong>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center bg-transparent text-gray-100">
                    <CardHeader className="flex items-center">
                        <Image
                            src={docker}
                            alt="React"
                        />
                        <strong>ReactJS/Native</strong>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </main>
    )
}