var data = {
  questions: [
    {//qustion 1
      queClass: 'que1',
      question: 'Где планируете ставить окно?',    
      type: 'radio',      
      dataNextDefault: 'que2',
      dataDiscount: 2,
      data: [
        {    
          answer: 'Окна в квартир',
          dataclass: 'input-1',
          dataNext:'que2',           
          checked: 'true'          
        },
        {
          answer: 'Окна в доме',
          dataclass: 'input-2',
          dataNext:'que3'          
        },
        {
          answer: 'Требуется обслуживание окон',
          dataclass: 'input-3',
          dataNext:'que2',          
          dataSkip:[
            'que3',
            'que4'
          ]
        },
        {
          answer: 'Окна в нежилые помещения и для юр.лиц',
          dataclass: 'input-4',
          dataNext:'que2'          
        },
        {
          answer: 'Остекление балкона',
          dataclass: 'input-5',
          dataNext:'que2'          
        }
      ]
    },
    {//qustion 2
      queClass: 'que2',
      question: 'Выберите вашу планировку',
      type: 'radio',         
      dataNextDefault: 'que3',
      dataDiscount: 4,
      data: [          
        {    
          answer: 'Ташкентская',
          dataclass: 'input-1',
          dataNext:'que3', 
          checked: 'true'          
        },
        {        
          answer: 'Сталинская',
          dataclass: 'input-2',
          dataNext:'que3'          
        },
        {
          answer: 'Кирпичный дом',
          dataclass: 'input-3',
          dataNext:'que3'          
        },
        {
          answer: 'Панельный дом',
          dataclass: 'input-4',
          dataNext:'que3'         
        },
        {
          answer: 'другое',
          dataclass: 'input-5',
          dataNext:'que3'         
        }
      ]
    },
    {//qustion 3
      queClass: 'que3',
      question: 'Где планируется поменять окна?',
      type: 'checkbox',      
      dataNextDefault: 'que4',
      dataDiscount: 3,
      data: [          
        {    
          answer: 'Зал',
          dataclass: 'input-1',
          dataNext:'que4',           
          checked: 'true'          
        },
        {        
          answer: 'Кухня',
          dataclass: 'input-2',
          dataNext:'que4'          
        },
        {
          answer: 'Балконный блок',
          dataclass: 'input-3',
          dataNext:'que5'          
        },
        {
          answer: 'Комната',
          dataclass: 'input-4',
          dataNext:'que4'          
        },
        {
          answer: 'Другое',
          dataclass: 'input-5',
          dataNext:'que4'          
        }
      ]
    },
    {//qustion 4
      queClass: 'que4',
      question: 'Нужен ли цветной профиль или ламинация?',
      type: 'radio',            
      dataNextDefault: 'que5',
      dataDiscount: 7,
      data: [          
        {    
          answer: 'Да, цветной профиль',
          dataclass: 'input-1',
          dataNext:'que5',              
          checked: 'true'          
        },
        {        
          answer: 'Да, ламинация',
          dataclass: 'input-2',
          dataNext:'que5'          
        },
        {
          answer: 'Нет, нужен белый профиль',
          dataclass: 'input-3',
          dataNext:'que5'          
        }        
      ],
      moreInfo: {          
        ttl: 'Защита от детей',
        text: 'Наша компания производит установку защиты от детей на любые окна, пластиковые и деревянные! ООО "Авангардин" предлагает для родителей новинку на рынке безопасности, уникальное изделие - решетки на створки окон. После установки решетки "КидСтоп" можно держать окно открытым и обеспечивать доступ свежего воздуха круглый год, будучи уверенным, что ребенок находится в безопасности.',
        listTtl: 'ЗАЩИТА НА ОКНА НУЖНА ДЛЯ:',
        list: ['семей с маленькими детьми ', 'безопасного проветривания помещения','ограничения доступа ребенка к окну', 'защиты окон в ДОУ'           
        ],
        slider: [
          'slider-img',
          'slider-img',
          'slider-img'
        ]
      }
    },
     {//qustion 5
      queClass: 'que5', 
      question: 'Выберите тип стеклопакетов:',
      type: 'radio',      
      dataNextDefault: 'que6',
      dataDiscount: 4,
      data: [          
        {    
          answer: 'Обычный',
          dataclass: 'input-1',
          dataNext:'que6',           
          checked: 'true'          
        },
        {        
          answer: 'Энергосберегающий',
          dataclass: 'input-2',
          dataNext:'que6',           
          answerTxt: 'на 30% лучше удерживает тепло'          
        },
        {
          answer: 'Мультифункциональный',
          dataclass: 'input-3',
          dataNext:'que6',           
          answerTxt:'на 30% лучше удерживает тепло и припятствует проникновению ИК-лучей тепло зимой, прохладно летом без кондиционера'          
        }        
      ],
      moreInfo: {          
        ttl: 'Тип стеклопакетов',
        text: 'Наша компания производит установку защиты от детей на любые окна, пластиковые и деревянные! ООО "Авангардин" предлагает для родителей новинку на рынке безопасности, уникальное изделие - решетки на створки окон. После установки решетки "КидСтоп" можно держать окно открытым и обеспечивать доступ свежего воздуха круглый год, будучи уверенным, что ребенок находится в безопасности.',
        listTtl: 'ЗАЩИТА НА ОКНА НУЖНА ДЛЯ:',
        list: ['семей с маленькими детьми ', 'безопасного проветривания помещения','ограничения доступа ребенка к окну', 'защиты окон в ДОУ'           
        ],
        slider: [
          'slider-img',
          'slider-img',
          'slider-img'
        ]
      }
    },
    {//qustion 6
      queClass: 'que6', 
      question: 'Сколько камер планируете в стеклопакете?',
      type: 'checkbox',      
      dataNextDefault: 'que7',
      dataDiscount: 4,
      data: [          
        {    
          answer: 'Однокамерные',
          dataclass: 'input-1',
          dataNext:'que7',           
          checked: 'true'
        },
        {        
          answer: 'Двухкамерные',
          dataclass: 'input-2',
          dataNext:'que7'         
        },
        {
          answer: 'Трехкамерные',
          dataclass: 'input-3',
          dataNext:'que7'          
        }        
      ],
      moreInfo: {          
        ttl: 'Тип стеклопакетов',
        text: 'Наша компания производит установку защиты от детей на любые окна, пластиковые и деревянные! ООО "Авангардин" предлагает для родителей новинку на рынке безопасности, уникальное изделие - решетки на створки окон. После установки решетки "КидСтоп" можно держать окно открытым и обеспечивать доступ свежего воздуха круглый год, будучи уверенным, что ребенок находится в безопасности.',
        listTtl: 'ЗАЩИТА НА ОКНА НУЖНА ДЛЯ:',
        list: ['семей с маленькими детьми ', 'безопасного проветривания помещения','ограничения доступа ребенка к окну', 'защиты окон в ДОУ'           
        ],
        slider: [
          'slider-img',
          'slider-img',
          'slider-img'
        ]
      }
    },
    {//qustion 7
      queClass: 'que7',
      question: 'Необходима ли защита от детей?',
      type: 'radio',      
      dataNextDefault: 'que-last',  
      dataDiscount: 4,
      data: [          
        {    
          answer: 'Да',
          dataclass: 'input-1',
          dataNext:'que-last', 
          checked: 'true'          
        },
        {        
          answer: 'Нет',
          dataclass: 'input-2',
          dataNext:'que-last'         
        }            
      ],
      moreInfo: {          
        ttl: 'Защита от детей',
        text: 'Наша компания производит установку защиты от детей на любые окна, пластиковые и деревянные! ООО "Авангардин" предлагает для родителей новинку на рынке безопасности, уникальное изделие - решетки на створки окон. После установки решетки "КидСтоп" можно держать окно открытым и обеспечивать доступ свежего воздуха круглый год, будучи уверенным, что ребенок находится в безопасности.',
        listTtl: 'ЗАЩИТА НА ОКНА НУЖНА ДЛЯ:',
        list: ['семей с маленькими детьми ', 'безопасного проветривания помещения','ограничения доступа ребенка к окну', 'защиты окон в ДОУ'           
        ],
        slider: [
          'slider-img',
          'slider-img',
          'slider-img'
        ]
      }
    },
    {//qustion 8
      question: 'Обслуживание',
      type: 'radio',      
      queClass: 'que8',
      dataNextDefault: 'que4',
      dataDiscount: 4,
      data: [          
        {    
          answer: 'Да',
          dataclass: 'input-1',
          dataNext:'que4',              
          checked: 'true'         
        },
        {        
          answer: 'Нет',
          dataclass: 'input-2',
          dataNext:'que4'          
        }            
      ],
      moreInfo: {          
        ttl: 'Защита от детей',
        text: 'Наша компания производит установку защиты от детей на любые окна, пластиковые и деревянные! ООО "Авангардин" предлагает для родителей новинку на рынке безопасности, уникальное изделие - решетки на створки окон. После установки решетки "КидСтоп" можно держать окно открытым и обеспечивать доступ свежего воздуха круглый год, будучи уверенным, что ребенок находится в безопасности.',
        listTtl: 'ЗАЩИТА НА ОКНА НУЖНА ДЛЯ:',
        list: ['семей с маленькими детьми ', 'безопасного проветривания помещения','ограничения доступа ребенка к окну', 'защиты окон в ДОУ'           
        ],
        slider: [
          'slider-img',
          'slider-img',
          'slider-img'
        ]
      }
    },
    {//qustion 9
      question: 'Выберите вашу планироку',
      type: 'radio',    
      queClass: 'que9',
      dataNextDefault: 'que4',
      dataDiscount: 4,
      data: [          
        {    
          answer: 'Ташкентская',
          dataclass: 'input-1',
          dataNext:'que3',           
          checked: 'true'          
        },
        {        
          answer: 'Сталинская',
          dataclass: 'input-2',
          dataNext:'que3'          
        },
        {
          answer: 'Кирпичный дом',
          dataclass: 'input-3',
          dataNext:'que3'          
        },
        {
          answer: 'Панельный дом',
          dataclass: 'input-4',
          dataNext:'que3'          
        },
        {
          answer: 'другое',
          dataclass: 'input-5',
          dataNext:'que3'          
        }
      ]
    }
  ]
}