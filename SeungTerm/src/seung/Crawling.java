package seung;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import com.google.gson.Gson;
import com.google.gson.JsonArray;



public class Crawling {
	private final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";

	//피플카에서 가져온 정보를 이용하여 장소입력시 피플존 출력 input은 서버에서 가져온값
	public JsonArray getPeopleCarLocation(String input) throws Exception {
		String url = "https://www.peoplecar.co.kr/main/findbyspot.asp?SearchKeyword=&query=" + input;

		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		con.setRequestProperty("User-Agent", USER_AGENT);

		int responseCode = con.getResponseCode();
		System.out.println("\nSending 'GET' request to URL : " + url);
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream(), "UTF-8"));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();

		//print result
		System.out.println(response.toString());

		Gson gson = new Gson();
		PeopleCarJson peopleCarJson = gson.fromJson(response.toString(), PeopleCarJson.class);

		return peopleCarJson.getSuggestions();
	}

	//쏘카에서 가져온 정보를 이용하여 장소입력시 쏘카존 출력
	public void getSocarLocation(String input) throws Exception {
		String url = "https://api.socar.kr/reserve/find_zone?callback=jQuery18305502463150189318_1528117065275&name=" + input + "&type=round&auth_token=&_=1528117080820";

		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		con.setRequestProperty("User-Agent", USER_AGENT);

		int responseCode = con.getResponseCode();
		System.out.println("\nSending 'GET' request to URL : " + url);
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();

		//print result
		System.out.println(response.toString());

		String result = response.toString().split("\"zones\":")[1];
		result = result.substring(0, result.length() - 3);
		Gson gson = new Gson();
		SoCarJson[] array = gson.fromJson(result, SoCarJson[].class);

		List<SoCarJson> list = Arrays.asList(array);
		ArrayList<SoCarJson> arrayList = new ArrayList<>();
		for(SoCarJson s : list) {
			arrayList.add(s);
		}

		for(SoCarJson s : arrayList) {
			System.out.println(s.getName());
		}
	}
}
