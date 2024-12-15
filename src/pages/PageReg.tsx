import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PageReg()  {
    return (
        <div className="bg-[#f8fafc] flex justify-center items-center w-screen h-dvh">
            <div className="bg-white flex-col w-416px h-486px rounded-[12px] p-3">

                <h3 className="decoration-[#0f172a] font-semibold">Создать аккаунт</h3>
                <div className="pt-3">
                    <div><Label htmlFor="terms">Почта</Label></div>
                    <Input type="email" placeholder="Введите почту" />
                </div>
                <div className="pt-3">
                    <div><Label htmlFor="terms">Пароль</Label></div>
                    <Input type="email" placeholder="Введите пароль" />
                </div>
                <div className="pt-3">
                    <div><Label htmlFor="terms">Повторите пароль</Label></div>
                    <Input type="email" placeholder="Повторите пароль" />
                </div>
                <div className="pt-3">
                    <div><Label htmlFor="terms">Выберите роль</Label></div>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="Reader">Читатель</TabsTrigger>
                            <TabsTrigger value="Author">Автор</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div className="pt-3">
                    <Button>Создать аккаунт</Button>
                </div>

                <div className="pt-3">
                    <div><Label htmlFor="terms">Уже есть аккаунт?<a href="/login">Войти</a></Label></div>
                </div>
            </div>
        </div>
    )
}

