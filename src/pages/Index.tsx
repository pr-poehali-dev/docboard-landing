import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">D&B</span>
            </div>
            <span className="font-semibold text-xl">Doc&Board</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <Button variant="outline" size="sm">Войти</Button>
            <Button size="sm">Попробовать бесплатно</Button>
          </div>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Документы и доски<br />в одном месте
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Как Notion + Miro, но российский и безопасный.<br />
            Визуальные доски, таблицы, шаблоны и теги — в облаке или on-premise
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Запросить демо
            </Button>
          </div>
          <div className="mt-12 bg-secondary/50 rounded-lg p-8 border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15,000+</div>
                <div className="text-sm text-muted-foreground">Активных пользователей</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Корпоративных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
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

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Сравнение с альтернативами</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden border">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Возможность</th>
                  <th className="px-6 py-4 text-center font-semibold">Notion</th>
                  <th className="px-6 py-4 text-center font-semibold">Miro</th>
                  <th className="px-6 py-4 text-center font-semibold">Confluence</th>
                  <th className="px-6 py-4 text-center font-semibold bg-primary/10">Doc&Board</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">Документы + доски в одном месте</td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-primary/5"><Icon name="Check" size={20} className="text-primary mx-auto" /></td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">On-premise установка</td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="Check" size={20} className="text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-primary/5"><Icon name="Check" size={20} className="text-primary mx-auto" /></td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Хранение данных в РФ</td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="Minus" size={20} className="text-yellow-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-primary/5"><Icon name="Check" size={20} className="text-primary mx-auto" /></td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Санкционные риски</td>
                  <td className="px-6 py-4 text-center text-sm text-muted-foreground">Высокие</td>
                  <td className="px-6 py-4 text-center text-sm text-muted-foreground">Высокие</td>
                  <td className="px-6 py-4 text-center text-sm text-muted-foreground">Средние</td>
                  <td className="px-6 py-4 text-center bg-primary/5 text-sm font-semibold text-primary">Нет</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Адаптация под корпорации</td>
                  <td className="px-6 py-4 text-center"><Icon name="Minus" size={20} className="text-yellow-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="X" size={20} className="text-muted-foreground mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Icon name="Check" size={20} className="text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-primary/5"><Icon name="Check" size={20} className="text-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
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
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>В разработке</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">AI-ассистент для работы</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Помощь в поиске по базе знаний, анализ документов, структурирование информации и поддержка продуктовых задач
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
              <Icon name="Search" size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Умный поиск</div>
                <div className="text-sm text-muted-foreground">Найдёт нужное даже по описанию контекста</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
              <Icon name="MessageSquare" size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Анализ документов</div>
                <div className="text-sm text-muted-foreground">Суммаризация, выделение главного</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
              <Icon name="Layers" size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Структурирование</div>
                <div className="text-sm text-muted-foreground">Предложения по организации знаний</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
              <Icon name="Lightbulb" size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Продуктовые задачи</div>
                <div className="text-sm text-muted-foreground">Помощь в анализе и планировании</div>
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
            <Card className="p-8 border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold">Популярный</span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Команда</h3>
                <p className="text-muted-foreground text-sm">Для небольших команд</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">₽990</span>
                <span className="text-muted-foreground">/пользователь/мес</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Неограниченные документы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Совместная работа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">История версий</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Приоритетная поддержка</span>
                </li>
              </ul>
              <Button className="w-full">Попробовать 14 дней</Button>
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

      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Начните работу с Doc&Board</h2>
          <p className="text-xl mb-8 opacity-90">Единое пространство для документов и досок вашей команды</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
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
