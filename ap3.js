 
const rp = require("request-promise")
const cheerio = require("cheerio")
const request = require("request")
const captcha = require("./capcha3")


 
var url = "https://publicodetran.es.gov.br/boletomulta/consultaBoletoMulta.asp"




    async function main(placa, renavam){



        var counter = 0;
       
    

         
        // let testeCaptcha =await captcha()
         //console.log("aqqq", testeCaptcha)
        let homePage = await rp.get("https://publicodetran.es.gov.br/boletomulta/consultaBoletoMulta.asp" , {
             gzip:true,
             
             resolveWithFullResponse: true,
         
         })
         
         let headersJSEEIOID = await homePage.rawHeaders[11]
         let headersJSEEIOID2 = await homePage.rawHeaders[15]
         let novoX = headersJSEEIOID.replace("; path=/", "");
         let resultadoHeadersJSEEIOID2 = headersJSEEIOID2.replace(/;Path=\/;Domain=[^;]+/, '');
         resultadoHeadersJSEEIOID2 = resultadoHeadersJSEEIOID2.replace('Affinity--324682480=', "")
         novoX = novoX.replace("ASPSESSIONIDCQACBAAS=", "")
        let CookieHeader = `${novoX}; ${resultadoHeadersJSEEIOID2}`
  
     
         let testeCaptcha = await captcha(CookieHeader)
    
    
     
         //=99755D0A3820445E41BA0977622D8FF6
      
         let result = await rp(url, {
            method: "POST",
             form: {
                placa,
                renavam,
                txtCaptcha: testeCaptcha,
                btnSubmit: '  OK  '   
               },
     
            headers: {
                 
                'Content-Type':'application/x-www-form-urlencoded',
                'Cookie': CookieHeader,
                 'Origin':'https://publicodetran.es.gov.br',
                'Referer':'https://publicodetran.es.gov.br/boletomulta/consultaBoletoMulta.asp',
                'Sec-Ch-Ua':'"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
                'Sec-Ch-Ua-Mobile':'?1',
                'Sec-Ch-Ua-Platform': "Android",
                'Sec-Fetch-Dest':'document',
                'Sec-Fetch-Mode':'navigate',
                'Sec-Fetch-Site':'same-origin',
                'Sec-Fetch-User':'?1',
                'Upgrade-Insecure-Requests': 1,
                'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36 Edg/122.0.0.0'
            }
          
     
        }) 
     
return result

 
           /*  let $ = cheerio.load(result)
     
             var Matricula = $('#contentPage > table > tbody > tr > td > table.TABELA_EXTERNA_NOTA_FISCAL > tbody > tr:nth-child(1) > td > table > tbody > tr > td.TABELA_INTERNA_FUND_NOTA_FISCAL > span.NOTA_FISCAL').text().trim()
             var Endereco = $('#contentPage > table > tbody > tr > td > table.TABELA_EXTERNA_NOTA_FISCAL > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > span.NOTA_FISCAL').text().trim()
             var bairro = $('#contentPage > table > tbody > tr > td > table.TABELA_EXTERNA_NOTA_FISCAL > tbody > tr:nth-child(2) > td > table > tbody > tr > td.TABELA_INTERNA_FUND_NOTA_FISCAL > span.NOTA_FISCAL').text().trim()
             var cidade = $('#contentPage > table > tbody > tr > td > table.TABELA_EXTERNA_NOTA_FISCAL > tbody > tr:nth-child(2) > td > table > tbody > tr > td.TABELA_INTERNA_ESQ_FUND_NOTA_FISCAL > span.NOTA_FISCAL').text().trim()
             var referencia = $('#webcontrol_2 > table > tbody > tr > td:nth-child(1)').text().trim()
             var origin = $('#webcontrol_2 > table > tbody > tr > td:nth-child(2)').text().trim()
             var vencimento = $('#webcontrol_2 > table > tbody > tr > td:nth-child(3)').text().trim()
             var valor = $('#webcontrol_2 > table > tbody > tr > td:nth-child(4)').text().trim()
             const array = [{Matricula: Matricula, Endereco: Endereco}, {bairro: bairro, cidade: cidade}, {referencia: referencia, origin: origin, vencimento: vencimento, valor: valor}]
                
             if(valor){
                console.log({Matricula: Matricula, valor: valor})
 
                 return array
             } 
             if(counter >= 2 ){

                console.log({matricula: matricula,error: 'Matricula errada'})
                return {error: 'Matricula errada, tente novamente'}
             }
        
        
             counter++
             
      */        
     } 
 

module.exports =  main
 