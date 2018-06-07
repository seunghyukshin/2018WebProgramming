<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="seung.Crawling" %>

<%
	Crawling crawling = new Crawling();

	String input = request.getParameter("input");

	PrintWriter pw = response.getWriter();
	pw.print(crawling.getPeopleCarLocation(input));
	pw.close();
%>