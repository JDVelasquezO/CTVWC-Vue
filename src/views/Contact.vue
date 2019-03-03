<template>
  <div class="contact">
  	<br>
    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card style='height: 500px;' class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2 grey--text">Envíanos un correo</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="height: 200px;">
          	<v-form
		    ref="form"
		    v-model="valid"
		    lazy-validation
		  >
		    <v-text-field
		      v-model="name"
		      :counter="10"
		      :rules="nameRules"
		      label="Name"
		      required
		    ></v-text-field>

		    <v-text-field
		      v-model="email"
		      :rules="emailRules"
		      label="E-mail"
		      required
		    ></v-text-field>

		    <v-select
		      v-model="select"
		      :items="items"
		      :rules="[v => !!v || 'Item is required']"
		      label="Item"
		      required
		    ></v-select>

		    <v-checkbox
		      v-model="checkbox"
		      :rules="[v => !!v || 'You must agree to continue!']"
		      label="Do you agree?"
		      required
		    ></v-checkbox>

		    <v-btn
		      :disabled="!valid"
		      color="success"
		      @click="validate"
		    >
		      Validate
		    </v-btn>

		    <v-btn
		      color="error"
		      @click="reset"
		    >
		      Reset Form
		    </v-btn>

		    <v-btn
		      color="warning"
		      @click="resetValidation"
		    >
		      Reset Validation
		    </v-btn>
		  </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
