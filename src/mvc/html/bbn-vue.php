<bbn-table :source="source.data"
           editable="nobuttons"      
           :info="true"
           :filterable="true"
           :sortable="true"
           :order="[{field: 'name', Dir: 'ASC'}]"
           :toolbar="[{
              text: '<?=_('Save')?>',
              action: save,
              icon: 'nf nf-fa-save'
           }]"
           
>
   <bbns-column field="name"
                title="<?_('Name')?>"
                :editable="false"
                width="130"
  ></bbns-column>

  <bbns-column field="kendo"
               title="<?=_('Kendo free')?>"
               width="95"
               type="boolean"
               :render="renderKendo"
               cls="bbn-c bbn-medium"
               :componentOptions="{
                 novalue: false
               }"
  ></bbns-column>
  
  <bbns-column field="state"
               title="<?=_('State')?>"
               cls="bbn-c"
               width="60"
               :render="renderState" 
               :source="states"
  ></bbns-column>

  <bbns-column field="priority"
               title="<?=_('Priority')?>"
               :source="priorities"
               cls="bbn-c bbn-b"
               width="60"
  ></bbns-column>

  <bbns-column field="issues"
               title="<?=_('Issues')?>"
  ></bbns-column>

</bbn-table>