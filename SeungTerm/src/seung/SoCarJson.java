package seung;

import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.JsonElement;

public class SoCarJson {
	private String zone_id;
	private String attr;
	private String attr_text;
	private String attr_url;
	private String attr_color;
	private String name;
	private String zone_alias;
	private String lat;
	private String lng;
	private boolean d2d_deliverable;

	public SoCarJson() {
		super();
		// TODO Auto-generated constructor stub
	}
	//쏘카 홈페이지에서 가져온 정보
	public SoCarJson(String zone_id, String attr, String attr_text, String attr_url, String attr_color, String name,
			String zone_alias, String lat, String lng, boolean d2d_deliverable) {
		super();
		this.zone_id = zone_id;
		this.attr = attr;
		this.attr_text = attr_text;
		this.attr_url = attr_url;
		this.attr_color = attr_color;
		this.name = name;
		this.zone_alias = zone_alias;
		this.lat = lat;
		this.lng = lng;
		this.d2d_deliverable = d2d_deliverable;
	}

	public String getZone_id() {
		return zone_id;
	}
	public void setZone_id(String zone_id) {
		this.zone_id = zone_id;
	}
	public String getAttr() {
		return attr;
	}
	public void setAttr(String attr) {
		this.attr = attr;
	}
	public String getAttr_text() {
		return attr_text;
	}
	public void setAttr_text(String attr_text) {
		this.attr_text = attr_text;
	}
	public String getAttr_url() {
		return attr_url;
	}
	public void setAttr_url(String attr_url) {
		this.attr_url = attr_url;
	}
	public String getAttr_color() {
		return attr_color;
	}
	public void setAttr_color(String attr_color) {
		this.attr_color = attr_color;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getZone_alias() {
		return zone_alias;
	}
	public void setZone_alias(String zone_alias) {
		this.zone_alias = zone_alias;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	public boolean isD2d_deliverable() {
		return d2d_deliverable;
	}
	public void setD2d_deliverable(boolean d2d_deliverable) {
		this.d2d_deliverable = d2d_deliverable;
	}


}
