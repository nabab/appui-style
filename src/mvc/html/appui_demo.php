<div class="bbn-overlay appui-style-demo-container">

  <bbn-splitter orientation="horizontal">
    <bbn-pane size="25%;">
      <bbn-list :source="sections"
                @select="changeClass"
                :cfg="{dataTextField: 'name'}"
      ></bbn-list>
    </bbn-pane>

    <bbn-pane>

        <div class="bbn-header bbn-c bbn-xxlarge bbn-pink" v-if="selected_section" v-text="selected_section">

        </div>
        <div v-if="selected_section">
          <ul>
            <li v-for="c in css_class"
                v-html="'<a href=\'#bbn-'+c+'\'>bbn-'+c+'</a>'"
                >
            </li>
          </ul>
        </div>
        <div class="bbn-c bbn-large" v-else>
          <?_("Select a section from the list to see Css class's name and how it works")?>
        </div>
        <div style="position:relative; height:100%">
          <bbn-dashboard v-if="selected_section">
            <bbns-widget v-for="(c, index) in css_class" :key="index">
              <div :class="'content bbn-'+ c "></div>
              <!--div :class="'content bbn-' + c">

                <div>
                  <div class="bbn-block">
                    <p v-if="standard_text" v-text="standard_text"></p>
                    <a :name="'bbn-' + c"></a>

                    <div class="bbn-lpadding">
                      <h3 class="bbn-c" v-text="'bbn-' + c"></h3>
                      <div v-if="!text && !font_size && !width && !height && !heightWidth && !hide && !font_size" class="bbn-form-full">
                        <code v-text="'<div class=\'bbn-'+c +codeText+ '\'></div>'"></code>
                      </div>
                    </div>
                  </div>
                </div>

                <!--div v-if="text || height || heightWidth || width || hide || font_size" class="bbn-form-full
                bbn-c">
                  <code v-text="'<div class=\'bbn-'+c +codeText+ '\'></div>'"></code>
                </div>
              </div-->
            </bbns-widget>
          </bbn-dashboard>
        </div>

      </bbn-pane>

  </bbn-splitter>
</div>