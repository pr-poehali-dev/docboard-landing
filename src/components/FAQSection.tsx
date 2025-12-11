import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Можно ли установить Doc&Board на своих серверах?",
    answer: "Да, мы предоставляем on-premise версию для установки на ваших серверах. Это позволяет полностью контролировать данные, соблюдать требования 152-ФЗ и работать без зависимости от внешних сервисов."
  },
  {
    question: "Как Doc&Board отличается от Notion и Confluence?",
    answer: "В отличие от Notion и Confluence, Doc&Board объединяет документы и визуальные доски в одном инструменте. Это российская разработка с хранением данных в РФ, поддержкой on-premise установки и без санкционных рисков."
  },
  {
    question: "Сколько стоит использование Doc&Board?",
    answer: "У нас есть бесплатная версия для небольших команд до 3 человек. Для продуктовых команд — от 500₽/месяц за пользователя. Для корпораций действуют индивидуальные тарифы с техподдержкой и персональной настройкой."
  },
  {
    question: "Можно ли перенести данные из Confluence или Notion?",
    answer: "Да, мы помогаем с миграцией данных из других систем. Для корпоративных клиентов предоставляем персональную поддержку по переносу документации, настройке структуры и обучению команды."
  },
  {
    question: "Как быстро можно начать работу?",
    answer: "Для небольших команд — сразу после регистрации, без настройки. Для продуктовых команд понадобится 1-2 дня на организацию структуры. Для корпораций с on-premise установкой — от 1 недели включая внедрение и обучение."
  },
  {
    question: "Есть ли интеграция с другими инструментами?",
    answer: "Да, Doc&Board интегрируется с популярными системами: SSO/Keycloak для авторизации, Jira для задач, Slack для уведомлений. Для корпоративных клиентов возможна разработка кастомных интеграций."
  },
  {
    question: "Подходит ли Doc&Board для госсектора?",
    answer: "Да, Doc&Board полностью соответствует требованиям госсектора: российская разработка, хранение данных в РФ, on-premise установка, соответствие 152-ФЗ, возможность работы в закрытом контуре без доступа в интернет."
  },
  {
    question: "Какая техподдержка предусмотрена?",
    answer: "Для всех клиентов — база знаний и email-поддержка. Для продуктовых команд — приоритетная поддержка в рабочие часы. Для корпоративных клиентов — выделенный менеджер, поддержка 24/7 и SLA на время реакции."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <Card key={index} className="overflow-hidden">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-lg">{faq.question}</span>
            <Icon 
              name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
              size={24} 
              className="text-primary flex-shrink-0"
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 pt-2 text-muted-foreground border-t">
              {faq.answer}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
