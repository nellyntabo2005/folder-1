/* document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                }
            });

            // Toggle current FAQ
            item.classList.toggle('active');
              // Toggle current FAQ
              item.classList.toggle('active');
            });
});
     });
 */

















     document.addEventListener('DOMContentLoaded', function() {
        const faqItems = document.querySelectorAll('.faq-item');
    
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
    
            question.addEventListener('click', () => {
                faqItems.forEach(el => {
                    if (el !== item) {
                        if (el.classList.contains('active')) {
                            el.classList.remove('active');
                        }
                    } else {
                        el.classList.toggle('active');
                    }
                });
            });
        });
    });























d/* ocument.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(el => {
                if (el !== item) {
                  if(el.classList.remove('active')){
                    el.classList.remove('active');
                 } 
                 else{
                      el.classList.toggle('active');
                  }
                }
            });

            // Toggle current FAQ
            item.classList.toggle('active');
              // Toggle current FAQ
              item.classList.toggle('active');
            });
});
     }); */
