import React from 'react'
import ValidatorComponent from 'react-native-form-validator' 
import {View,StyleSheet,Text,TextInput,Button} from 'react-native'

export default class ResumeForm extends ValidatorComponent {
    state ={
        name: '',
        nickname: '',
        age: '',
        skill: '',
    }

    _onSubmit = () =>{
        this.validate({
            name: {required: true},
            nickname: {required: true},
            age: {required:true , numbers: true},
            skill: {required:true},

        })
    }
    render() {
        return(
        <View style={styles.container} >
            <View>
                <Text style={styles.errorMassages}>
                    {this.getErrorMessages()}
                </Text>
            </View>
            <View>
                <Text>Full name</Text>
                <TextInput 
                onChangeText={(text) => this.setState({ name : text})}
                value={this.state.name} 
                style={styles.textInput}> 
                </TextInput>
            </View>
            <View>
                <Text>Nickname</Text>
                <TextInput 
                onChangeText={(text) => this.setState({ nickname : text})} 
                value={this.state.nickname}
                style={styles.textInput}> 
                </TextInput>
            </View>
            <View>
                <Text>Age</Text>
                <TextInput 
                onChangeText={(text) => this.setState({ age : text})} 
                value={this.state.age}
                style={styles.textInput}> 
                </TextInput>
            </View>
            <View>
                <Text>Skill</Text>
                <TextInput 
                onChangeText={(text) => this.setState({ skill : text})} 
                value={this.state.skill}
                style={styles.textAreInput}
                multiline={true}

                > 
                </TextInput>
            </View>
            <View style={{marginTop: 20}}>
                <Button title="Create Resume" onPress={this._onSubmit}></Button>
            </View>
        </View>
        


        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding:30,
        backgroundColor: 'white',
        minHeight:'100%'

    },
    textInput:{
        height:40,
        borderColor: 'gray',
        borderWidth:1


    },
    textAreInput:{
        height: 100,
        borderColor: 'gray',
        borderWidth:1
    },
    errorMassages:{
        color: 'red',
        marginBottom : 20
    }

})