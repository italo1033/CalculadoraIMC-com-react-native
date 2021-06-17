import React,{Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

type Props={};
export default  class App extends Component<Props>{
  constructor(props){
    super(props)
    this.state={altura:0, massa:0, Resultado:0, ResultadoText:""}
    this.calcular=this.calcular.bind(this)
  }
  calcular(){
    let  imc= this.state.massa / ( this.state.altura * this.state.altura)
    let s= this.state
    s.Resultado=imc
    this.setState(s)


    if (imc < 17){
      s.ResultadoText= "Muito abaixo do peso"
    }else if(imc >= 17 && imc <= 18.49){
      s.ResultadoText= "Abaixo do peso"
    }else if(imc >= 18.5 && imc <= 24.99){
      s.ResultadoText= "Peso normal"
    }else if(imc >= 25 && imc <= 29.99){
      s.ResultadoText= "Acima do peso"
    }else if(imc >= 30 && imc <= 34.99){
      s.ResultadoText= "Obesidade I"
    }else if(imc >= 35 && imc <= 39.99){
      s.ResultadoText= "Obesidade II (severa)"
    }else if(imc >= 40 ){
      s.ResultadoText= "Obesidade III (mórbida)"
    }

  }

  render(){
    return(
      <View style={styles.container}>    
          <View style={styles.entradasMassaAltura}>
            <TextInput
                  placeholder="Altura" 
                  keyboardType="numeric"
                  maxLength={4}
                  toFixed={3}
                  style={styles.input}
                  onChangeText={(altura)=>{this.setState({altura})}}>
                  

            </TextInput>
            <TextInput 
                  placeholder="Massa"
                  keyboardType="numeric" 
                  style={styles.input}
                  onChangeText={(massa)=>{this.setState({massa})}}>

            </TextInput>
          </View>



          <TouchableOpacity style={styles.butao} onPress={this.calcular}>
            <Text style={styles.butaoText}>Calcular</Text>
          </TouchableOpacity> 


          <Text style={styles.Resultado}>{this.state.Resultado.toFixed(3)} </Text>
          {/* nessa linha abaixo eu mudei a fonte criando um array e modificando o que eu queria que fosse modificado*/}
          <Text style={[styles.Resultado, {fontSize:30}]}>{this.state.ResultadoText}</Text> 
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
   },



   entradasMassaAltura:{
      flexDirection:'row'
   },




  input:{
    height: 80,
    textAlign:'center',
    width: '50%',
    fontSize:50,
    marginTop:24,
  
  },



  butao:{
    backgroundColor:'blue'
  },




  butaoText:{
    alignSelf:'center',
    padding: 30,
    fontSize:25,
    color: '#6dc4a4',
    fontWeight:'bold'
  },
  Resultado:{
    alignSelf:'center',
    color: 'red',
    padding: 15,
    fontSize:50
  },



 });




