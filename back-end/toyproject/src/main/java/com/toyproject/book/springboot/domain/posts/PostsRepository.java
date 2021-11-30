package com.toyproject.book.springboot.domain.posts;

import org.springframework.data.jpa.repository.JpaRepository;

// Posts 클래스로 데이터베이스에 접근하게 해주는 인터페이스 - DB에 접근하는 영역
// CRUD 메소드 자동 생성
public interface PostsRepository extends JpaRepository<Posts, Long> {
}
