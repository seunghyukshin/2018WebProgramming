package seung;

import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;

public class PeopleCarJson {
	private String query;
	private JsonArray suggestions;

	public PeopleCarJson() {
		this.query = null;
		this.suggestions = null;
	}

	public PeopleCarJson(String query, JsonArray suggestions) {
		this.query = query;
		this.suggestions = suggestions;
	}
	// 
	public ArrayList<Suggestions> getList() {
		Gson gson = new Gson();
		ArrayList<Suggestions> list = new ArrayList<>();
		for(JsonElement element : this.suggestions) {
			Suggestions s = gson.fromJson(element, Suggestions.class);
			list.add(s);
		}

		return list;
	}
  //getter setter
	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public JsonArray getSuggestions() {
		return suggestions;
	}

	public void setSuggestions(JsonArray suggestions) {
		this.suggestions = suggestions;
	}



	public class Suggestions {
		private String value;
		private String data;

		public Suggestions() {
			this.value = null;
			this.data = null;
		}

		public Suggestions(String value, String data) {
			this.value = value;
			this.data = data;
		}

		public String getValue() {
			return value;
		}

		public void setValue(String value) {
			this.value = value;
		}

		public String getData() {
			return data;
		}

		public void setData(String data) {
			this.data = data;
		}
	}
}
