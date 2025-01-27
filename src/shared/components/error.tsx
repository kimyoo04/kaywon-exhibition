'use client'

import * as React from 'react'

import { cn } from '@/shared/utils'

export type StatusCode = keyof typeof statusKR

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusCode
  statusText?: string
  message?: string
  className?: string
}

const Error = ({ status, statusText, message, className, ...props }: ErrorProps) => {
  return (
    <div className={cn('flex h-screen w-full', className)} {...props}>
      <div className="container flex max-w-screen-md items-center justify-center">
        <h1 className="text-2xl font-medium">{status}</h1>
        <div className="ml-6 border-l border-solid border-[rgba(0,0,0,.3)] py-1 pl-6 dark:border-[rgba(255,255,255,.3)]">
          <h2 className="font-medium">{statusText ?? statusKR[status].statusText}</h2>
          <p className="text-sm text-muted-foreground">{message ?? statusKR[status].message}</p>
        </div>
      </div>
    </div>
  )
}

const Forbidden = (props: Omit<ErrorProps, 'status'>) => {
  return <Error status="403" {...props} />
}

const NotFound = (props: Omit<ErrorProps, 'status'>) => {
  return <Error status="404" {...props} />
}

const statusKR = {
  '100': {
    statusText: '계속',
    message:
      '이 임시적인 응답은 지금까지의 상태가 괜찮으며 클라이언트가 계속해서 요청을 하거나 이미 요청을 완료한 경우에는 무시해도 되는 것을 알려줍니다.',
  },
  '101': {
    statusText: '프로토콜 전환',
    message: '요청자가 서버에 프로토콜 전환을 요청했으며 서버는 이를 승인하는 중입니다.',
  },
  '102': {
    statusText: '처리 중',
    message:
      '이 코드는 서버가 요청을 수신하였으며 이를 처리하고 있지만, 아직 제대로 된 응답을 알려줄 수 없음을 알려줍니다.',
  },
  '103': { statusText: 'Early Hints', message: '' },

  '200': { statusText: '성공', message: '요청이 성공적으로 되었습니다.' },
  '201': {
    statusText: '생성됨',
    message: '요청이 성공적이었으며 그 결과로 새로운 리소스가 생성되었습니다.',
  },
  '202': {
    statusText: '허용됨',
    message: '요청을 수신하였지만 그에 응하여 행동할 수 없습니다.',
  },
  '203': {
    statusText: '신뢰할 수 없는 정보',
    message:
      '이 응답 코드는 돌려받은 메타 정보 세트가 오리진 서버의 것과 일치하지 않지만 로컬이나 서드 파티 복사본에서 모아졌음을 의미합니다.',
  },
  '204': {
    statusText: '콘텐츠 없음',
    message: '요청에 대해서 보내줄 수 있는 콘텐츠가 없지만, 헤더는 의미있을 수 있습니다.',
  },
  '205': {
    statusText: '콘텐츠 재설정',
    message:
      '이 응답 코드는 요청을 완수한 이후에 사용자 에이전트에게 이 요청을 보낸 문서 뷰를 리셋하라고 알려줍니다.',
  },
  '206': {
    statusText: '일부 콘텐츠',
    message:
      '이 응답 코드는 클라이언트에서 복수의 스트림을 분할 다운로드를 하고자 범위 헤더를 전송했기 때문에 사용됩니다.',
  },
  '207': {
    statusText: '다중 상태',
    message:
      '멀티-상태 응답은 여러 리소스가 여러 상태 코드인 상황이 적절한 경우에 해당되는 정보를 전달합니다.',
  },
  '208': {
    statusText: '이미 보고됨',
    message:
      '<dav:propstat> 응답 속성으로 동일 컬렉션으로 바인드된 복수의 내부 멤버를 반복적으로 열거하는 것을 피하기 위해 사용됩니다.',
  },
  '226': {
    statusText: 'IM Used',
    message:
      '서버가 GET 요청에 대한 리소스의 의무를 다 했고, 그리고 응답이 하나 또는 그 이상의 인스턴스 조작이 현재 인스턴스에 적용이 되었음을 알려줍니다.',
  },

  '300': { statusText: '복수 응답', message: '요청에 대해서 하나 이상의 응답이 가능합니다.' },
  '301': {
    statusText: '영구 이동',
    message: '이 응답 코드는 요청한 리소스의 URI가 변경되었음을 의미합니다.',
  },
  '302': {
    statusText: '다른 위치 찾음',
    message: '이 응답 코드는 요청한 리소스의 URI가 일시적으로 변경되었음을 의미합니다.',
  },
  '303': {
    statusText: '다른 위치 보기',
    message:
      '클라이언트가 요청한 리소스를 다른 URI에서 GET 요청을 통해 얻어야 할 때, 서버가 클라이언트로 직접 보내는 응답입니다.',
  },
  '304': { statusText: '수정되지 않음', message: '이것은 캐시를 목적으로 사용됩니다.' },
  '305': {
    statusText: '프록시 사용',
    message:
      '이전 버전의 HTTP 기술 사양에서 정의되었으며, 요청한 응답은 반드시 프록시를 통해서 접속해야 하는 것을 알려줍니다.',
  },
  '306': {
    statusText: '프록시 전환',
    message:
      '(사용되지 않음) 이 응답 코드는 더이상 사용되지 않으며, 현재는 추후 사용을 위해 예약되어 있습니다.',
  },
  '307': {
    statusText: '임시 리다이렉션',
    message:
      '클라리언트가 요청한 리소스가 다른 URI에 있으며, 이전 요청과 동일한 메소드를 사용하여 요청해야할 때, 서버가 클라이언트에 이 응답을 직접 보냅니다.',
  },
  '308': {
    statusText: '영구 리다이렉션',
    message:
      '이것은 리소스가 이제 HTTP 응답 헤더의 Location: 에 명시된 영구히 다른 URI에 위치하고 있음을 의미합니다.',
  },

  '400': {
    statusText: '잘못된 요청',
    message: '이 응답은 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음을 의미합니다.',
  },
  '401': {
    statusText: '권한 없음',
    message: '클라이언트는 요청한 응답을 받기 위해서는 반드시 스스로를 인증해야 합니다.',
  },
  '402': {
    statusText: '결제 필요',
    message: '(사용되지 않음) 이 응답 코드는 나중에 사용될 것을 대비해 예약되었습니다.',
  },
  '403': {
    statusText: '거부됨',
    message: '클라이언트는 콘텐츠에 접근할 권리를 가지고 있지 않습니다.',
  },
  '404': { statusText: '찾을 수 없음', message: '서버는 요청받은 리소스를 찾을 수 없습니다.' },
  '405': {
    statusText: '허용되지 않는 메소드',
    message: '요청한 메소드는 서버에서 알고 있지만, 제거되었고 사용할 수 없습니다.',
  },
  '406': {
    statusText: '받아들일 수 없음',
    message:
      '이 응답은 서버가 서버 주도 콘텐츠 협상 을 수행한 이후, 사용자 에이전트에서 정해준 규격에 따른 어떠한 콘텐츠도 찾지 않았을 때, 웹서버가 보냅니다.',
  },
  '407': {
    statusText: '프록시 인증 필요',
    message: '이것은 401과 비슷하지만 프록시에 의해 완료된 인증이 필요합니다.',
  },
  '408': {
    statusText: '요청 시간 초과',
    message:
      '이 응답은 요청을 한지 시간이 오래된 연결에 일부 서버가 전송하며, 어떨 때에는 이전에 클라이언트로부터 어떠한 요청이 없었다고 하더라도 보내지기도 합니다.',
  },
  '409': {
    statusText: '충돌',
    message: '이 응답은 요청이 현재 서버의 상태와 충돌될 때 보냅니다.',
  },
  '410': {
    statusText: '사라짐',
    message:
      '이 응답은 요청한 콘텐츠가 서버에서 영구적으로 삭제되었으며, 전달해 줄 수 있는 주소 역시 존재하지 않을 때 보냅니다.',
  },
  '411': {
    statusText: '길이 필요',
    message:
      '서버에서 필요로 하는 Content-Length 헤더 필드가 정의되지 않은 요청이 들어왔기 때문에 서버가 요청을 거절합니다.',
  },
  '412': {
    statusText: '전제조건 실패',
    message: '클라이언트의 헤더에 있는 전제조건은 서버의 전제조건에 적절하지 않습니다.',
  },
  '413': {
    statusText: '요청이 너무 긺',
    message: '요청 엔티티는 서버에서 정의한 한계보다 큽니다.',
  },
  '414': {
    statusText: 'URI가 너무 긺',
    message: '클라이언트가 요청한 URI는 서버에서 처리하지 않기로 한 길이보다 깁니다.',
  },
  '415': {
    statusText: '지원하지 않는 미디어 타입',
    message: '요청한 미디어 포맷은 서버에서 지원하지 않습니다.',
  },
  '416': {
    statusText: '요청범위 부적합',
    message: 'Range 헤더 필드에 요청한 지정 범위를 만족시킬 수 없습니다.',
  },
  '417': {
    statusText: '예측 실패',
    message:
      '이 응답 코드는 Expect 요청 헤더 필드로 요청한 예상이 서버에서는 적당하지 않음을 알려줍니다.',
  },
  '418': {
    statusText: "I'm a teapot",
    message: '(사용되지 않음) 서버는 커피를 찻 주전자에 끓이는 것을 거절합니다.',
  },
  '421': {
    statusText: '잘못된 요청',
    message: '서버로 유도된 요청은 응답을 생성할 수 없습니다.',
  },
  '422': {
    statusText: '처리할 수 없는 개체',
    message: '요청은 잘 만들어졌지만, 문법 오류로 인하여 따를 수 없습니다.',
  },
  '423': { statusText: '잠김', message: '리소스는 접근하는 것이 잠겨있습니다.' },
  '424': {
    statusText: '실패한 종속성',
    message: '이전 요청이 실패하였기 때문에 지금의 요청도 실패하였습니다.',
  },
  '425': {
    statusText: '너무 일찍요청',
    message: '서버가 재생될 수 있는 요청을 처리하는 위험을 감수할 의사가 없음을 나타냅니다.',
  },
  '426': {
    statusText: '업그레이드 필요',
    message:
      '서버는 지금의 프로토콜을 사용하여 요청을 처리하는 것을 거절하였지만, 클라이언트가 다른 프로토콜로 업그레이드를 하면 처리를 할지도 모릅니다.',
  },
  '428': { statusText: '전제조건 필요', message: '오리진 서버는 요청이 조건적이어야 합니다.' },
  '429': {
    statusText: '너무 많은 요청',
    message: '사용자가 지정된 시간에 너무 많은 요청을 보냈습니다',
  },
  '431': {
    statusText: '요청 헤더 필드가 너무 큼',
    message: '요청한 헤더 필드가 너무 크기 때문에 서버는 요청을 처리하지 않을 것입니다.',
  },
  '451': {
    statusText: '법적인 이유로 차단됨',
    message: '사용자가 요청한 것은 정부에 의해 검열된 웹 페이지와 같은 불법적인 리소스입니다.',
  },

  '500': {
    statusText: '내부 서버 오류',
    message: '서버가 처리 방법을 모르는 상황이 발생했습니다.',
  },
  '501': {
    statusText: '요청한 기능 미지원',
    message: '요청 방법은 서버에서 지원되지 않으므로 처리할 수 없습니다.',
  },
  '502': {
    statusText: '게이트웨이 불량',
    message:
      '이 오류 응답은 서버가 요청을 처리하는 데 필요한 응답을 얻기 위해 게이트웨이로 작업하는 동안 잘못된 응답을 수신했음을 의미합니다.',
  },
  '503': {
    statusText: '서비스를 사용할 수 없음',
    message: '서버가 요청을 처리할 준비가 되지 않았습니다.',
  },
  '504': {
    statusText: '게이트웨이 시간 초과',
    message:
      '이 오류 응답은 서버가 게이트웨이 역할을 하고 있으며 적시에 응답을 받을 수 없을 때 주어집니다.',
  },
  '505': {
    statusText: '지원되지 않는 HTTP 버전',
    message: '요청에 사용된 HTTP 버전은 서버에서 지원되지 않습니다.',
  },
  '506': {
    statusText: 'Variant Also Negotiates',
    message: '서버에 내부 구성 오류가 있습니다.',
  },
  '507': { statusText: '저장 공간 부족', message: '서버에 내부 구성 오류가 있습니다.' },
  '508': {
    statusText: '무한 루프 발견',
    message: '서버가 요청을 처리하는 동안 무한 루프를 감지했습니다.',
  },
  '510': {
    statusText: '확장되지 않았음',
    message: '서버가 요청을 이행하려면 요청에 대한 추가 확장이 필요합니다.',
  },
  '511': {
    statusText: '네트워크 인증 필요',
    message:
      '511 상태 코드는 클라이언트가 네트워크 액세스를 얻기 위해 인증을 받아야 할 필요가 있음을 나타냅니다.',
  },
}

export { Forbidden, NotFound, Error, type ErrorProps }
