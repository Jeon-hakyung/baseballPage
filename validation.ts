
// contents.js에 구현된 두 번째 함수를 ts로 구현하였음 

function validateEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function handleFormSubmit(event: Event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const resultContainer = document.getElementById('result');
  
    const name = nameInput.value;
    const email = emailInput.value;
  
    if (validateEmail(email)) {
      resultContainer.textContent = `유효한 이메일 주소입니다: ${name} (${email})`;
      // 여기서 폼 전송 처리를 수행할 수 있습니다.
    } else {
      resultContainer.textContent = '유효하지 않은 이메일 주소입니다.';
    }
  }
  
  const emailForm = document.getElementById('emailForm');
  emailForm.addEventListener('submit', handleFormSubmit);
  