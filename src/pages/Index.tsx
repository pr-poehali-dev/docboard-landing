import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

function EnterpriseForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Card className="p-8 bg-white">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
          <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input 
              id="name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <Label htmlFor="company">Компания *</Label>
            <Input 
              id="company" 
              required 
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="ООО «Ромашка»"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="i.ivanov@company.ru"
            />
          </div>
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+7 (999) 123-45-67"
            />
          </div>
          <div>
            <Label htmlFor="message">Сообщение</Label>
            <Textarea 
              id="message" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Расскажите о вашем проекте..."
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      )}
    </Card>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">D&B</span>
            </div>
            <span className="font-semibold text-xl">Doc&Board</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#ai-assistant" className="text-muted-foreground hover:text-foreground transition-colors">AI-ассистент</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm">Попробовать бесплатно</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/30 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.06),transparent_50%)]"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Документы и доски в одном месте
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Как Notion + Miro, но российский и безопасный. Визуальные доски, таблицы, шаблоны и теги — в облаке или on-premise
              </p>
              <div className="flex gap-4 flex-wrap mb-12">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-purple-200 text-purple-700 hover:bg-purple-50">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Запросить демо
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">15,000+</div>
                  <div className="text-sm text-gray-600">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">100+</div>
                  <div className="text-sm text-gray-600">Корпоративных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl p-3 border border-gray-700 shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded px-3 py-1 text-xs text-gray-300 font-mono">
                    Doc&Board — Главная
                  </div>
                </div>
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-700">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full"
                  >
                    <source src="https://msafi.ru/hse/preview.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 h-4 rounded-b-xl border-x border-b border-gray-700 shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Знакомые проблемы?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover-scale">
              <Icon name="Boxes" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Зоопарк инструментов</h3>
              <p className="text-muted-foreground">Документы в Confluence, доски в Miro, заметки в Notion — контекст теряется между приложениями</p>
            </Card>
            <Card className="p-6 hover-scale">
              <Icon name="ShieldAlert" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Санкции и безопасность</h3>
              <p className="text-muted-foreground">Западные сервисы — риски блокировок, проблемы с оплатой, требования хранения данных в РФ</p>
            </Card>
            <Card className="p-6 hover-scale">
              <Icon name="Search" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">База знаний растёт</h3>
              <p className="text-muted-foreground">Документация накапливается, но найти нужное становится всё сложнее — нет единой структуры</p>
            </Card>
            <Card className="p-6 hover-scale">
              <Icon name="UserPlus" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Долгое погружение</h3>
              <p className="text-muted-foreground">Новые сотрудники неделями разбираются в проектах — информация разбросана по разным местам</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Doc&Board решает эти задачи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Единое пространство для документов, досок и знаний вашей команды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Документы + доски</h3>
              <p className="text-sm text-muted-foreground">Переключайтесь между текстом и визуальными схемами в одном файле</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FolderTree" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Проекты и знания</h3>
              <p className="text-sm text-muted-foreground">Регламенты, базы знаний, проектная документация — всё в одном workspace</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Tags" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Поиск и структура</h3>
              <p className="text-sm text-muted-foreground">Теги, коллекции, шаблоны — находите нужное за секунды</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Быстрое погружение</h3>
              <p className="text-sm text-muted-foreground">Новые сотрудники видят полный контекст проекта сразу</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Безопасность</h3>
              <p className="text-sm text-muted-foreground">On-premise установка, хранение в РФ, контроль доступа</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Российская разработка</h3>
              <p className="text-sm text-muted-foreground">Поддержка на русском, соответствие 152-ФЗ, импортозамещение</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="features">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Для кого подходит</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Doc&Board решает задачи разных команд</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Небольшие команды</h3>
              <p className="text-muted-foreground mb-4">Стартапы, агентства, студии 2–10 человек</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Быстрый старт без настройки</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Оплата в рублях</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Доступная цена</span>
                </div>
              </div>
            </Card>
            <Card className="p-8 hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Продуктовые команды</h3>
              <p className="text-muted-foreground mb-4">Продакты, аналитики, дизайнеры, разработчики в одном пространстве</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Документация и спецификации</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Визуальные схемы и User Flow</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>База знаний продукта</span>
                </div>
              </div>
            </Card>
            <Card className="p-8 hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Building2" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Корпорации и госсектор</h3>
              <p className="text-muted-foreground mb-4">Компании от 100+ сотрудников с высокими требованиями к безопасности</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>On-premise установка</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Интеграция SSO / Keycloak</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>152-ФЗ и импортозамещение</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="ai-assistant" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50/30 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>В разработке</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">AI-ассистент для работы</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Помощь в поиске по базе знаний, анализ документов, структурирование информации и поддержка продуктовых задач
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-purple-100">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Search" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1">Умный поиск</div>
                <div className="text-sm text-gray-600">Найдёт нужное даже по описанию контекста</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-purple-100">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1">Анализ документов</div>
                <div className="text-sm text-gray-600">Суммаризация, выделение главного</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-purple-100">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Layers" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1">Структурирование</div>
                <div className="text-sm text-gray-600">Предложения по организации знаний</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-purple-100">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1">Продуктовые задачи</div>
                <div className="text-sm text-gray-600">Помощь в анализе и планировании</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="pricing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Выберите подходящий план для вашей команды</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Бесплатно</h3>
                <p className="text-muted-foreground text-sm">Для личного использования</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">₽0</span>
                <span className="text-muted-foreground">/месяц</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">До 10 документов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Основные функции</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Хранение в облаке</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Начать бесплатно</Button>
            </Card>
            <Card className="p-8 border-2 border-transparent bg-gradient-to-br from-purple-50 to-pink-50 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Популярный</span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Команда</h3>
                <p className="text-gray-600 text-sm">Для небольших команд</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">₽990</span>
                <span className="text-gray-600">/пользователь/мес</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Неограниченные документы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Совместная работа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">История версий</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Приоритетная поддержка</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">Попробовать 14 дней</Button>
            </Card>
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground text-sm">Для корпораций</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">По запросу</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">On-premise установка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SSO / Keycloak</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SLA 99.9%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Персональный менеджер</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Запросить демо</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50/30 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Gift" size={16} />
              <span>Попробуйте бесплатно</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Бесплатная демо-версия на 14 дней</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Оцените всю мощь платформы без рисков и ограничений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Без риска попробовать всё</h3>
                <p className="text-sm text-gray-600">Полный доступ ко всем функциям платформы в реальных условиях</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Идеально для новичков</h3>
                <p className="text-sm text-gray-600">Для студентов, фрилансеров и небольших команд</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Плавный старт</h3>
                <p className="text-sm text-gray-600">Достаточно времени для настройки и принятия решения</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Нет привязки к карте</h3>
                <p className="text-sm text-gray-600">Простая регистрация — и сразу в работу</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать пробный период
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Компании доверяют Doc&Board для работы с документами и знаниями</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Ростелеком</div>
                  <div className="text-sm text-muted-foreground">Команда разработки</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">"Перешли с Confluence на Doc&Board. Возможность совмещать документы и визуальные схемы в одном месте сэкономила нам недели работы"</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Сбер</div>
                  <div className="text-sm text-muted-foreground">Проектный офис</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">"Важно было иметь on-premise решение с хранением в РФ. Doc&Board полностью закрыл наши требования по ИБ и импортозамещению"</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Студия Артемия Лебедева</div>
                  <div className="text-sm text-muted-foreground">Дизайн-команда</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">"Простой и функциональный инструмент. Теперь вся база знаний проектов в одном месте, а новички быстро входят в контекст"</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Запросите демо для вашей компании</h2>
              <p className="text-lg opacity-90 mb-6">Оставьте заявку, и наш специалист свяжется с вами для презентации Doc&Board и обсуждения вашего проекта</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Персональная демонстрация</div>
                    <div className="text-sm opacity-80">Покажем возможности под ваши задачи</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Консультация по внедрению</div>
                    <div className="text-sm opacity-80">Поможем с миграцией и настройкой</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Тестовый период</div>
                    <div className="text-sm opacity-80">Попробуйте на реальных проектах</div>
                  </div>
                </div>
              </div>
            </div>
            <EnterpriseForm />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Начните работу с Doc&Board</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Единое пространство для документов и досок вашей команды</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-purple-200 text-purple-700 hover:bg-purple-50">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с продажами
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D&B</span>
                </div>
                <span className="font-semibold text-lg">Doc&Board</span>
              </div>
              <p className="text-sm text-muted-foreground">Российская разработка для работы с документами и визуальными досками</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Безопасность</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">152-ФЗ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ISO 27001</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Doc&Board. Все права защищены. Разработано в России 🇷🇺</p>
          </div>
        </div>
      </footer>
    </div>
  );
}