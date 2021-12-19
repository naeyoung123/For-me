const QnAList = [{
        q: '월경이 규칙적인가요?',
        a: [{
                answer: '예',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '아니오',
                type: ['pad', 'tampon']
            },
            {
                answer: '잘 모르겠어요',
                type: ['pad', 'cotton', 'tampon']
            }
        ]
    },

    {
        q: '월경통이 어느 정도로 심각한가요?',
        a: [{
                answer: '거의 없어요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '보통이에요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '심한 편이에요',
                type: ['cotton', 'tampon']
            },
            {
                answer: '아주 심해요',
                type: ['cotton', 'cup']
            }
        ]
    },

    {
        q: '월경시 Y존 민감 증상(쓰라림, 가려움 등)이 있나요?',
        a: [{
                answer: '거의 없어요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '보통이에요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '심한 편이에요',
                type: ['cup', 'cotton', 'tampon']
            },
            {
                answer: '아주 심해요',
                type: ['cup', 'tampon']
            }
        ]
    },

    {
        q: '월경시 활동량은 많은 편인가요?',
        a: [{
                answer: '거의 움직이지 않는 편이에요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '보통이에요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '매우 활발한 편이에요',
                type: ['cup', 'tampon']
            }
        ]
    },

    {
        q: '구매에 대한 생각이 궁금해요!',
        a: [{
                answer: '언제 어디서든 쉽게 구할 수 있었으면 좋겠어요',
                type: ['pad']
            },
            {
                answer: '인터넷에서 사서 상관없어요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '매달 구매하는 과정이 귀찮아요',
                type: ['cotton', 'cup']
            }
        ]
    },

    {
        q: '유기농 제품에 대한 생각이 궁금해요',
        a: [{
                answer: '잘 모르고 관심없어요',
                type: ['pad', 'tampon']
            },
            {
                answer: '관심은 있는 데 찾아서 사용하진 않아요',
                type: ['pad', 'cotton', 'cup', 'tampon']
            },
            {
                answer: '찾아서 사용하고 있어요',
                type: ['pad', 'cotton', 'cup']
            }
        ]
    },

    {
        q: '월경용품을 사용하면서 가장 불편한 점은 무엇인가요?',
        a: [{
                answer: '쓰레기가 너무 많이 나와요',
                type: ['cotton', 'cup']
            },
            {
                answer: '장시간 외출 시 사용이 불편해요',
                type: ['pad', 'tampon']
            },
            {
                answer: '판매하는 제품이 다양하지 않아요',
                type: ['pad']
            }
        ]
    },

    {
        q: '삽입형 월경용품에 대한 거부감이 있나요?',
        a: [{
                answer: '네 거부감이 있어요',
                type: ['pad', 'cotton']
            },
            {
                answer: '아뇨 없어요',
                type: ['cup', 'tampon']
            },
            {
                answer: '잘 모르겠어요',
                type: ['pad', 'cup', 'cotton', 'tampon']
            }
        ]
    }
]


const infoList = [{
        name: '클래식 이즈 더 베스트 <일회용 월경대>',
        desc: '가장 많은 사람들이 사용하고 있는 제품군이예요. 판매하는 제품군이 다양하고 언제 어디서나 쉽게 구할 수 있다는 게 큰 장점이에요.'
    },
    {
        name: ' <면 월경대>',
        desc: ''
    },
    {
        name: '<월경컵>',
        desc: '월경계의 신문물 월경컵! 활동이 많은 날도 사용할 수 있어요. 재사용이 가능하고 세척도 쉬운 편 '
    },
    {
        name: ' <탐폰>',
        desc: '활동이 많은 날에도 샘걱정 없이 사용할 수 있어요! 8시간 이상 사용은 권하지 않아요.'
    }
]