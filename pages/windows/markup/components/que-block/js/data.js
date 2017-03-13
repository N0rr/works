var data = {
  questions: [
    {//qustion 1
      queClass: 'que1',
      question: 'Где планируете ставить окно?',    
      type: 'radio',
      numberQuestion: '1',
      dataNextDefault: 'que2',
      data: [        
        {    
          answer: 'Окна в квартир',
          dataclass: 'input-1',
          dataNext:'que2', 
          dataSkip:'',  
          checked: 'true'
        },
        {        
          answer: 'Окна в доме',
          dataclass: 'input-2',
          dataNext:'que3', 
          dataSkip:'que2'        
        },
        {
          answer: 'Требуется обслуживание окон',
          dataclass: 'input-3',
          dataNext:'que8', 
          dataSkip:''
        },
        {
          answer: 'Окна в нежилые помещения и для юр.лиц',
          dataclass: 'input-4',
          dataNext:'que2', 
          dataSkip:'que3'          
        },
        {
          answer: 'Остекление балкона',
          dataclass: 'input-5',
          dataNext:'que2', 
          dataSkip:'que3'
        }
      ]
    },
    {//qustion 2
      question: 'Выберите вашу планировку',
      type: 'radio',
      numberQuestion: '2',
      queClass: 'que2',
      data: [          
        {    
          answer: 'Ташкентская',
          dataclass: 'input-1',
          dataNext:'que3', 
          dataSkip:'',
          checked: 'true'
        },
        {        
          answer: 'Сталинская',
          dataclass: 'input-2',
          dataNext:'que3', 
          dataSkip:''        
        },
        {
          answer: 'Кирпичный дом',
          dataclass: 'input-3',
          dataNext:'que3', 
          dataSkip:''
        },
        {
          answer: 'Панельный дом',
          dataclass: 'input-4',
          dataNext:'que3', 
          dataSkip:''
        },
        {
          answer: 'другое',
          dataclass: 'input-5',
          dataNext:'que3', 
          dataSkip:'que3'
        }
      ]
    },
    {//qustion 3
      question: 'Где планируется поменять окна?',
      type: 'checkbox',
      numberQuestion: '3',
      queClass: 'que3',
      data: [          
        {    
          answer: 'Зал',
          dataclass: 'input-1',
          dataNext:'que4', 
          dataSkip:'',    
          checked: 'true'
        },
        {        
          answer: 'Кухня',
          dataclass: 'input-2',
          dataNext:'que4', 
          dataSkip:''        
        },
        {
          answer: 'Балконный блок',
          dataclass: 'input-3',
          dataNext:'que4', 
          dataSkip:''
        },
        {
          answer: 'Комната',
          dataclass: 'input-4',
          dataNext:'que4', 
          dataSkip:''
        },
        {
          answer: 'Другое',
          dataclass: 'input-5',
          dataNext:'que4', 
          dataSkip:''
        }
      ]
    },
    {//qustion 4
      question: 'Нужен ли цветной профиль или ламинация?',
      type: 'radio',
      numberQuestion: '4',
      queClass: 'que4',      
      data: [          
        {    
          answer: 'Да, цветной профиль',
          dataclass: 'input-1',
          dataNext:'que5', 
          dataSkip:'',    
          checked: 'true'
        },
        {        
          answer: 'Да, ламинация',
          dataclass: 'input-2',
          dataNext:'que5', 
          dataSkip:''        
        },
        {
          answer: 'Нет, нужен белый профиль',
          dataclass: 'input-3',
          dataNext:'que5', 
          dataSkip:''
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
      question: 'Выберите тип стеклопакетов:',
      type: 'radio',
      numberQuestion: '5',
      queClass: 'que5',            
      data: [          
        {    
          answer: 'Обычный',
          dataclass: 'input-1',
          dataNext:'que6', 
          dataSkip:'',    
          checked: 'true'          
        },
        {        
          answer: 'Энергосберегающий',
          dataclass: 'input-2',
          dataNext:'que6', 
          dataSkip:'',
          answerTxt: 'на 30% лучше удерживает тепло'
        },
        {
          answer: 'Мультифункциональный',
          dataclass: 'input-3',
          dataNext:'que6', 
          dataSkip: '',
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
      question: 'Сколько камер планируете в стеклопакете?',
      type: 'checkbox',
      numberQuestion: '6',
      queClass: 'que6',            
      data: [          
        {    
          answer: 'Однокамерные',
          dataclass: 'input-1',
          dataNext:'que7', 
          dataSkip:'',    
          checked: 'true'          
        },
        {        
          answer: 'Двухкамерные',
          dataclass: 'input-2',
          dataNext:'que7', 
          dataSkip:''          
        },
        {
          answer: 'Трехкамерные',
          dataclass: 'input-3',
          dataNext:'que7', 
          dataSkip: ''         
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
      question: 'Необходима ли защита от детей?',
      type: 'radio',
      numberQuestion: '7',
      queClass: 'que7',            
      data: [          
        {    
          answer: 'Да',
          dataclass: 'input-1',
          dataNext:'que-last', 
          dataSkip:'',    
          checked: 'true'          
        },
        {        
          answer: 'Нет',
          dataclass: 'input-2',
          dataNext:'que-last', 
          dataSkip:''          
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
      question: 'Сколько камер планируете?',
      type: 'radio',
      numberQuestion: '2',
      queClass: 'que8',            
      data: [          
        {    
          answer: 'Да',
          dataclass: 'input-1',
          dataNext:'que4', 
          dataSkip:'',    
          checked: 'true'          
        },
        {        
          answer: 'Нет',
          dataclass: 'input-2',
          dataNext:'que4', 
          dataSkip:''          
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
      numberQuestion: '9',
      queClass: 'que9',
      data: [          
        {    
          answer: 'Ташкентская',
          dataclass: 'input-1',
          dataNext:'que3', 
          dataSkip:'',
          checked: 'true'
        },
        {        
          answer: 'Сталинская',
          dataclass: 'input-2',
          dataNext:'que3', 
          dataSkip:''        
        },
        {
          answer: 'Кирпичный дом',
          dataclass: 'input-3',
          dataNext:'que3', 
          dataSkip:''
        },
        {
          answer: 'Панельный дом',
          dataclass: 'input-4',
          dataNext:'que3', 
          dataSkip:''
        },
        {
          answer: 'другое',
          dataclass: 'input-5',
          dataNext:'que3', 
          dataSkip:'que3'
        }
      ]
    }
  ]
}

export default data