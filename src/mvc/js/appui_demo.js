var classes = [
  {
  name: 'class_name_css',
  classes: [
    'content',
    'border-box',
    'spacer',
    'legend',
    'block',
    'block-left',
    'block-right',
    'block-after',
    'iblock',
    'form-label',
    'form-field',
    'form-full',
    'line-breaker',
    'fl',
    'nl',
    'loading',
    'loader',
    'loader-inner',
    'stats',
  ]
}, {
  name: 'Font Colors',
  classes: [
    'black',
    'darkgrey',
    'grey',
    'white',
    'blue',
    'turquoise',
    'navy',
    'purple',
    'pink',
    'red',
    'olive',
    'green',
    'orange',
    'yellow',
    'cyan',
    'brown'
  ]
},
  {
    name: 'Background Colors',
    classes: [
      'bg-white',
      'bg-black',
      'bg-darkgrey',
      'bg-grey',
      'bg-navy',
      'bg-blue',
      'bg-cyan',
      'bg-pink',
      'bg-purple',
      'bg-green',
      'bg-turquoise',
      'bg-olive',
      'bg-brown',
      'bg-red',
      'bg-orange',
      'bg-yellow'
    ]
  },
  {
    name: 'Paddings',
    classes: [
      'no-padding',
      'hlpadded',
      'vlpadded',
      'lpadded',
      'hpadded',
      'vpadded',
      'hspadded',
      'vspadded',
      'spadded'
    ]
  },
  {
    name: 'Margins',
    classes: [
      'no-margin',
      'hlmargin',
      'vlmargin',
      'lmargin',
      'hmargin',
      'vmargin',
      'margin',
      'hsmargin',
      'vsmargin',
      'smargin'
    ]
  },
  {
    name: 'Text Alignment',
    classes: [
      'c',
      'centered',
      'j',
      'justified',
      'l',
      'left',
      'r',
      'right',
    ]
  },{
    name: 'Vertical Align',
    classes: [
      'middle',
      'hmiddle',
      'vmiddle',
    ]
  },
  {
    name: 'Font Size',
    classes: [
      'xxxxl',
      'xxxxlarge',
      'xxxl',
      'xxxlarge',
      'xl',
      'xlarge',
      'lg',
      'large',
      's',
      'small',
      'xs',
      'xsmall',
    ]
  },
  {
    name: 'Text Style',
    classes: [
      'b',
      ' bold',
      'i',
      'italic',
      'u',
      'underlined',
    ]
  },
  {
    name: 'Widths',
    classes: [
      'full-width',
      'w-100',
      'w-90',
      'w-80',
      'w-75',
      'w-70',
      'w-66',
      'w-60',
      'w-50',
      'w-40',
      'w-33',
      'w-30',
      'w-25',
      'w-20',
      'w-15',
      'w-10',

    ]
  },
  {
    name: 'Heights',
    classes: [
      'full-height',
      'h-100',
      'h-90',
      'h-80',
      'h-75',
      'h-70',
      'h-66',
      'h-60',
      'h-50',
      'h-40',
      'h-33',
      'h-30',
      'h-25',
      'h-20',
      'h-15',
      'h-10',
      'h-5',
    ],
    p:'You can define the height of your element by adding class bbn-h or bbn-overlay'
  },
  {
    name: 'Heights & Widths',
    classes: [
      'full-screen',
      'full-content',
      '100',
      '90',
      '80',
      '75',
      '70',
      '66',
      '60',
      '50',
      '40',
      '33',
      '30',
      '25',
      '20',
      '15',
      '10',
      '5',
    ]
  },
  {
    name: 'Pointers',
    classes: [
      'p',
      'pointer',
    ]

  },
  {
    name: 'Hide',
    classes: [
      'h',
      'hidden',
    ]
  },
  {
    name:'Borders',
    classes: [
      'section',
      'o',
      'no-border',
    ]
  }
];


(function(){
  return {

    data: function(){
      return {
        sections: classes,
        css_class: [],
        //the name of the selected section if there's one
        selected_section: false,
        //the text of examples of sections font-colors, text-alignment, font-size, text-style
        standard_text: '',
        font_size: false,
        width : false,
        height : false,
        blue: '',
        green: '',
        red: '',
        //when I add a class different from the example class changes the string of the tag adding the others class used
        codeText: false,
        heightWidth: false,
        hide: false,
        text_align: false,
        text: false,
        generic_class: false,
        v_align:false,


      }
    },
    watch:{
      selected_section(){
        const vm = this;
        vm.$nextTick(() => {

          if( vm.selected_section ){
            if( vm.selected_section.indexOf('Vertical Align') === 0 ){
              vm.v_align = true;
              vm.green = ' border-green'
            }
            if( vm.selected_section.indexOf('class_name_css') === 0 ){
              vm.generic_class = true;
              vm.green = ' border-green'
            }
            if( vm.selected_section.indexOf('Text') === 0 || vm.selected_section.indexOf('Font') === 0 ){
              vm.text = true;
              if( vm.selected_section.indexOf( 'Text Alignment' === 0 )){
                vm.text_align === true;
              }
              vm.codeText = '';
              vm.red = ' width height';
              vm.blue = ' bbn-100';
              vm.green= ' border-green width height';
              vm.$nextTick(()=>{
                bbn.fn.analyzeContent(this.$el, true);
              });
              if( (vm.selected_section.indexOf('Font Colors') === 0)  ){
                bbn.fn.each(vm.css_class, (v, i) => {
                  if ( v === 'white' ){
                    vm.$nextTick(()=>{
                      //$('.bbn-white', this.$el).addClass("bbn-bg-black");                      
                      document.getElementsByClassName('bbn-white').querySelector(this.$el).classList.add("bbn-bg-black");
                      vm.$nextTick(()=>{
                        bbn.fn.analyzeContent(this.$el, true);
                      });
                    })
                  }
                });
              }

              if( vm.selected_section.indexOf('Font Size') === 0 ){
                //vm.standard_text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...';
                vm.standard_text = '';
                vm.font_size = true;
                vm.red = ' width height';
                vm.blue = 'border-blue width';
                vm.green= ' border-green width height';
                vm.$nextTick(()=>{
                  bbn.fn.analyzeContent(this.$el, true);
                })
              }

              else{
                vm.standard_text = '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"';
              }
            }
            else{
              vm.standard_text = 'Hello!'
            }
            if( vm.selected_section.indexOf('Paddings') === 0 ){
              vm.codeText = ' border-green';
              vm.standard_text='';
              vm.red = ' border-red';
              vm.blue = ' border-blue bbn-100';
              vm.green = ' border-green'

            }
            if( vm.selected_section.indexOf('Margins') === 0 ){
              vm.codeText = ' border-green';
              vm.standard_text = '';
              vm.blue = ' border-blue bbn-100';
              vm.green = ' border-green'
            }
            if( vm.selected_section.indexOf('Background') === 0 ){
              vm.standard_text = '';
              vm.green = ' border-green width';
              vm.red = ' width';
              vm.blue = ' bbn-100';
            }
            if(vm.selected_section.indexOf('Widths') === 0 ){
              vm.red = ' width';
              vm.blue = ' border-blue bbn-100';
              vm.width = true;
              vm.codeText = ' border-green'
              vm.standard_text='';
              vm.green = ' border-green'
              vm.$nextTick(()=>{
                bbn.fn.analyzeContent(this.$el, true);
              })
            }
            if(vm.selected_section.indexOf('Heights') === 0 ){
              if(vm.selected_section.indexOf('Heights & Widths') === 0 ){
                vm.heightWidth = true;
                vm.blue = 'border-blue defined-height defined-width';
                vm.standard_text = '';
                vm.red = '  width height bbn-middle';
                vm.codeText = ' border-green';
                vm.green = ' border-green'
              }
              else{
                vm.height = true;
                if( vm.height === true ){
                  $('.bbn-block').find('h3').addClass('bbn-no-margin');
                }

                vm.blue = 'border-blue defined-height'
                vm.green = ' border-green width';
                vm.codeText = ' border-green';
                vm.red = ' width height bbn-middle';
                vm.standard_text ='';

              }
            }
            if(vm.selected_section.indexOf('Pointers') === 0 ){
              vm.standard_text = 'Move the mouse over the green rectangle';
              vm.green = ' border-green bbn-c';
              vm.red = ' width';
              vm.blue = ' bbn-middle';

            }
            if(vm.selected_section.indexOf('Hide') === 0 ){
              vm.hide = true;
              vm.standard_text = '';
              vm.blue = 'border-blue defined-height';
              vm.codeText = ' border-green';
              vm.green = ' border-green'
            }
            if(vm.selected_section.indexOf('Borders') === 0 ){
              vm.standard_text = '';
              vm.green= ''
            }
          }

        })
      }


    },

    methods: {
      changeClass(idx, data){
        const vm = this;
        if ( data.name ){
          vm.selected_section = data.name;
          vm.green = '';
          vm.blue = '';
          vm.codeText = '';
          vm.red = '';
          vm.font_size = false;
          vm.width = false;
          vm.height = false;
          vm.heightWidth = false;
          vm.hide = false;
          vm.text = false;
          vm.generic_class = false;
          vm.v_align = false;
          vm.$nextTick(()=>{
            bbn.fn.analyzeContent(this.$el, true);
          })


          //$('.bbn-block').find('h3').removeClass('bbn-no-margin');
          document.getElementsByClassName("bbn-block").getElementsByTagName("h3").classList.remove("bbn-no-margin");
          //$('.bbn-avatar').find('img').remove()
          document.getElementsByClassName("bbn-avatar").getElementsByTagName("img").remove();
          //$('.bbn-100').removeClass('bbn-bg-black');
          document.getElementsByClassName("bbn-100").classList.remove("bbn-bg-black");
          if ( data.classes.length ){
            bbn.fn.each(data.classes, (v, i) => {
              vm.css_class = data.classes;
              bbn.fn.each(vm.css_class, (v, i) => {
                if( v.indexOf('h-') === 0 ){
                  this.height = true;
                }
              });
            });
          }
        }
        vm.$forceUpdate();
      }
    },
    updated(){
      bbn.fn.analyzeContent(this.$el, true);
    }
  }
})();
