import {Reg} from "@/components/reg"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PageReg()  {
    return (
        <div className="RegForm">
            <div><Label htmlFor="terms">Почта</Label></div>
            <Input type="email" placeholder="Введите почту" />
            <div><Label htmlFor="terms">Пароль</Label></div>
            <Input type="email" placeholder="Введите пароль" />
            <div><Label htmlFor="terms">Повторите пароль</Label></div>
            <Input type="email" placeholder="Повторите пароль" />
            <div><Label htmlFor="terms">Выберите роль</Label></div>

            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Reader">Читатель</TabsTrigger>
                    <TabsTrigger value="Author">Автор</TabsTrigger>
                </TabsList>
            </Tabs>

            <Button>Создать аккаунт</Button>
        </div>
    )
}

