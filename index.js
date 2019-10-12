// Hint: you may find it helpful to read up on 
// and use the following jQuery methods: .submit(),
//  preventDefault(), toggleClass(), and closest().
// $(function (){
//     $('.button-label').on('click', function(event){
//       $('.button-label').text('TEST TEST TEST');
//     })
// })
// $(function (){
//     $('#js-shopping-list-form').on('click', function(event){
//         event.preventDefault();
//         let newItemText = $('#shopping-list-entry').val();
//         console.log(newItemText);
//         $('.shopping-list').append(`<li>
//         <span class="shopping-item"> ${newItemText} </span>
//         <div class="shopping-item-controls">
//           <button class="shopping-item-toggle">
//             <span class="button-label">check</span>
//           </button>
//           <button class="shopping-item-delete">
//             <span class="button-label">delete</span>
//           </button>
//         </div>
//       </li>`);
//     });
// });
// $(function (){
//     $('form').on('click', 'button', function(event){
//         event.preventDefault();
//         let newItemText = $('#shopping-list-entry').val();
//         console.log(newItemText);
//         $('.shopping-list').append(`<li>
//         <span class="shopping-item"> ${newItemText} </span>
//         <div class="shopping-item-controls">
//           <button class="shopping-item-toggle">
//             <span class="button-label">check</span>
//           </button>
//           <button class="shopping-item-delete">
//             <span class="button-label">delete</span>
//           </button>
//         </div>
//       </li>`);
//     });
// });
$(function (){
    $('form').submit(function(event){
        event.preventDefault();
        let newItemText = $('#shopping-list-entry').val();
        console.log(newItemText);
        $('.shopping-list').append(`<li>
        <span class="shopping-item"> ${newItemText} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });
});
$(function (){
    $('ul').on('click', 'button', function(event){
        event.preventDefault();

        if ($(this).attr('class') == 'shopping-item-toggle'){
            $(this).parent('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
        }
        // console.log($(this))
        
        // $(this).parent('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
        // // console.log($(this));
    });
});
$(function (){
    $('ul').on('click','button', function(event){
        event.preventDefault();
        
        if ($(this).attr('class') == 'shopping-item-delete'){
        $(this).closest('li').remove();
        }// console.log($(this));
    });
});
// $(function (){
//     $('.shopping-item-delete').on('click', function(event){
//         event.preventDefault();
        
//         $(this).closest('li').remove();
//         console.log($(this).closest('li'));
//     });
// });